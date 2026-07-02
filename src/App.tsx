import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function App() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  // States for live HUD display
  const [zoom, setZoom] = useState(17);
  const [center, setCenter] = useState<[number, number]>([3.4326, 6.4522]);
  const [pitch, setPitch] = useState(60);
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   if (!mapContainerRef.current) return;

  //   // Create the Maplibre GL map instance centered on 5B Bank Road, Ikoyi, Lagos
  //   const map = new maplibregl.Map({
  //     container: mapContainerRef.current,
  //     style: 'https://tiles.openfreemap.org/styles/bright', // clean bright style matching reference
  //     center: [3.4326, 6.4522], // 5B Bank Road coordinates
  //     zoom: 17,
  //     pitch: 60,
  //     bearing: 0,
  //     canvasContextAttributes: {
  //       antialias: true
  //     }
  //   });

  //   mapRef.current = map;

  //   // Add navigation controls (zoom, compass, visualize pitch)
  //   map.addControl(new maplibregl.NavigationControl({
  //     showCompass: true,
  //     showZoom: true,
  //     visualizePitch: true
  //   }), 'bottom-right');

  //   map.on('load', () => {
  //     setIsLoaded(true);

  //     // Add a premium pulsing marker for 5B, Bank Road
  //     const el = document.createElement('div');
  //     el.innerHTML = `
  //       <div style="display: flex; flex-direction: column; align-items: center; font-family: -apple-system, BlinkMacSystemFont, sans-serif;">
  //         <div style="background: #ff3b30; width: 32px; height: 32px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.3); animation: markerPulse 2s infinite;">
  //           <span style="font-size: 14px; color: white;">📍</span>
  //         </div>
  //         <div style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); color: #1c1c1e; border: 1px solid rgba(0,0,0,0.08); padding: 6px 12px; border-radius: 12px; font-weight: 700; font-size: 11px; margin-top: 6px; box-shadow: 0 4px 16px rgba(0,0,0,0.12); white-space: nowrap; text-align: center;">
  //           5B, Bank Road
  //           <div style="font-size: 9px; color: #8e8e93; font-weight: 500; margin-top: 2px;">Old Ikoyi, Lagos</div>
  //         </div>
  //       </div>
  //       <style>
  //         @keyframes markerPulse {
  //           0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 59, 48, 0.4); }
  //           70% { transform: scale(1.05); box-shadow: 0 0 0 8px rgba(255, 59, 48, 0); }
  //           100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 59, 48, 0); }
  //         }
  //       </style>
  //     `;
  //     new maplibregl.Marker({ element: el })
  //       .setLngLat([3.4326, 6.4522])
  //       .addTo(map);
  //   });

  //   map.on('style.load', () => {
  //     // Configure 3D buildings layer to be light-grey and semi-transparent
  //     if (map.getLayer('building-3d')) {
  //       map.setPaintProperty('building-3d', 'fill-extrusion-color', '#eaeaea');
  //       map.setPaintProperty('building-3d', 'fill-extrusion-opacity', 0.65);
  //     } else if (map.getSource('openmaptiles')) {
  //       // Fallback in case building-3d layer doesn't exist but source does
  //       map.addLayer({
  //         'id': '3d-buildings',
  //         'source': 'openmaptiles',
  //         'source-layer': 'building',
  //         'type': 'fill-extrusion',
  //         'minzoom': 14,
  //         'paint': {
  //           'fill-extrusion-color': '#eaeaea',
  //           'fill-extrusion-height': ['coalesce', ['get', 'render_height'], ['get', 'height'], 15],
  //           'fill-extrusion-base': ['coalesce', ['get', 'render_min_height'], ['get', 'min_height'], 0],
  //           'fill-extrusion-opacity': 0.65
  //         }
  //       });
  //     }
  //   });

  //   // Update HUD stats on move / tilt / zoom
  //   map.on('move', () => {
  //     setZoom(Number(map.getZoom().toFixed(2)));
  //     const { lng, lat } = map.getCenter();
  //     setCenter([Number(lng.toFixed(4)), Number(lat.toFixed(4))]);
  //     setPitch(Number(map.getPitch().toFixed(0)));
  //   });

  //   // Cleanup on unmount
  //   return () => {
  //     map.remove();
  //   };
  // }, []);

  useEffect(() => {
  if (!mapContainerRef.current) return;

  const CENTER: [number, number] = [3.4326, 6.4522]; // 5B Bank Road, Old Ikoyi

  // Bounding box locking the map to the Old Ikoyi / Bank Road area
  // [southWestLng, southWestLat], [northEastLng, northEastLat]
  const IKOYI_BOUNDS: [[number, number], [number, number]] = [
    [3.4230, 6.4440], // SW corner
    [3.4430, 6.4610], // NE corner
  ];

  // Create the Maplibre GL map instance centered on 5B Bank Road, Ikoyi, Lagos
  const map = new maplibregl.Map({
    container: mapContainerRef.current,
    style: 'https://tiles.openfreemap.org/styles/bright', // clean bright style matching reference
    center: CENTER,
    zoom: 17,
    minZoom: 14,        // prevents zooming out past the neighborhood
    maxZoom: 20,
    pitch: 60,
    bearing: 0,
    maxBounds: IKOYI_BOUNDS, // locks panning to Old Ikoyi
    canvasContextAttributes: {
      antialias: true
    }
  });

  mapRef.current = map; 

  // Add navigation controls (zoom, compass, visualize pitch)
  map.addControl(new maplibregl.NavigationControl({
    showCompass: true,
    showZoom: true,
    visualizePitch: true
  }), 'bottom-right');

  map.on('load', () => {
    setIsLoaded(true);

    // Snap the camera to show the full bounded region on load
    map.fitBounds(IKOYI_BOUNDS, { padding: 40, pitch: 60, duration: 0 });

    // Add a premium pulsing marker for 5B, Bank Road
    const el = document.createElement('div');
    el.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; font-family: -apple-system, BlinkMacSystemFont, sans-serif;">
        <div style="background: #ff3b30; width: 32px; height: 32px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.3); animation: markerPulse 2s infinite;">
          <span style="font-size: 14px; color: white;">📍</span>
        </div>
        <div style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); color: #1c1c1e; border: 1px solid rgba(0,0,0,0.08); padding: 6px 12px; border-radius: 12px; font-weight: 700; font-size: 11px; margin-top: 6px; box-shadow: 0 4px 16px rgba(0,0,0,0.12); white-space: nowrap; text-align: center;">
          5B, Bank Road
          <div style="font-size: 9px; color: #8e8e93; font-weight: 500; margin-top: 2px;">Old Ikoyi, Lagos</div>
        </div>
      </div>
      <style>
        @keyframes markerPulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 59, 48, 0.4); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 8px rgba(255, 59, 48, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 59, 48, 0); }
        }
      </style>
    `;
    new maplibregl.Marker({ element: el })
      .setLngLat(CENTER)
      .addTo(map);
  });

  map.on('style.load', () => {
    // Configure 3D buildings layer to be light-grey and semi-transparent
    if (map.getLayer('building-3d')) {
      map.setPaintProperty('building-3d', 'fill-extrusion-color', '#eaeaea');
      map.setPaintProperty('building-3d', 'fill-extrusion-opacity', 0.65);
    } else if (map.getSource('openmaptiles')) {
      // Fallback in case building-3d layer doesn't exist but source does
      map.addLayer({
        'id': '3d-buildings',
        'source': 'openmaptiles',
        'source-layer': 'building',
        'type': 'fill-extrusion',
        'minzoom': 14,
        'paint': {
          'fill-extrusion-color': '#eaeaea',
          'fill-extrusion-height': ['coalesce', ['get', 'render_height'], ['get', 'height'], 15],
          'fill-extrusion-base': ['coalesce', ['get', 'render_min_height'], ['get', 'min_height'], 0],
          'fill-extrusion-opacity': 0.65
        }
      });
    }
  });

  // Update HUD stats on move / tilt / zoom
  map.on('move', () => {
    setZoom(Number(map.getZoom().toFixed(2)));
    const { lng, lat } = map.getCenter();
    setCenter([Number(lng.toFixed(4)), Number(lat.toFixed(4))]);
    setPitch(Number(map.getPitch().toFixed(0)));
  });

  // Cleanup on unmount
  return () => {
    map.remove();
  };
}, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Map Container */}
      <div 
        ref={mapContainerRef} 
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} 
      />

      {/* Floating Glass HUD Overlay */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        width: '300px',
        background: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        borderRadius: '20px',
        padding: '24px',
        color: '#1c1c1e',
        zIndex: 10,
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <div>
          <h1 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 700, 
            background: 'linear-gradient(135deg, #007aff 0%, #00c6ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
            letterSpacing: '-0.025em'
          }}>
            5B, Bank Road
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#8e8e93', marginTop: '4px', fontWeight: 500 }}>
            Old Ikoyi, Lagos State
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(0, 0, 0, 0.06)', margin: 0 }} />

        {/* Live Map Coordinates & Stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#8e8e93', fontWeight: 500 }}>Status:</span>
            <span style={{ color: isLoaded ? '#34c759' : '#ff9500', fontWeight: 700 }}>
              {isLoaded ? '● Ready' : '● Loading...'}
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#8e8e93', fontWeight: 500 }}>Zoom Level:</span>
            <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#1c1c1e' }}>{zoom}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#8e8e93', fontWeight: 500 }}>Map Pitch:</span>
            <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#1c1c1e' }}>{pitch}°</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
            <span style={{ color: '#8e8e93', fontWeight: 500 }}>Center Coordinates:</span>
            <div style={{ 
              fontFamily: 'monospace', 
              fontSize: '0.8rem', 
              background: 'rgba(0, 0, 0, 0.04)', 
              padding: '6px 10px', 
              borderRadius: '8px', 
              color: '#3a3a3c',
              border: '1px solid rgba(0, 0, 0, 0.02)',
              marginTop: '2px'
            }}>
              Lng: {center[0]} <br /> Lat: {center[1]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
