import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import * as THREE from 'three';

// Animation variants for drawing the SVGs
const pathVariants: Variants = {
  hidden: { 
    pathLength: 0, 
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgba(212, 175, 55, 0.8)", // elegant gold outline drawing
    strokeWidth: 1.5
  },
  visible: { 
    pathLength: 1, 
    fill: "rgba(255, 255, 255, 0.95)", // fills in white
    stroke: "rgba(212, 175, 55, 0)", // stroke fades out
    transition: { 
      pathLength: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
      fill: { duration: 1.2, delay: 1.8, ease: "easeOut" },
      stroke: { duration: 1.2, delay: 1.8, ease: "easeOut" }
    }
  }
};

// Animated Monogram Crest Component
export function HamiltonCrest() {
  return (
    <motion.svg 
      width="160" 
      height="133" 
      viewBox="0 0 261 217" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      <motion.g initial="hidden" animate="visible">
        <motion.path 
          variants={pathVariants}
          d="M66.3163 27.0267L60.4443 28.96V90.0934C56.035 82.84 49.119 77.2667 40.875 74.6534V14.8L85.8843 0V87.8534L130.504 118.653L140.856 111.52L158.078 123.413L130.504 142.44L66.3163 98.12V27.0267ZM175.123 87.8667V0L220.132 12.3333V108.4C220.132 114.267 224.912 119.04 230.786 119.04C236.659 119.04 241.439 114.267 241.439 108.4V108.387C241.439 102.507 236.659 97.7333 230.786 97.7333C228.766 97.7333 226.894 98.3334 225.282 99.3068V78.6934C227.07 78.36 228.904 78.16 230.786 78.16C247.45 78.16 261.008 91.72 261.008 108.387V108.4C261.008 125.053 247.45 138.613 230.786 138.613C214.122 138.613 200.563 125.053 200.563 108.4V27.2534L194.691 25.6534V98.1333L184.366 105.267L167.143 93.3734L175.123 87.8667Z" 
        />
        <motion.path 
          variants={pathVariants}
          d="M30.2213 78.1626C46.8867 78.1626 60.444 91.7227 60.444 108.376V189.523L66.316 191.123V118.643L76.6413 111.509L93.8653 123.403L85.884 128.909V216.776L40.8747 204.443V108.376C40.8747 102.509 36.096 97.7359 30.2213 97.7359C24.348 97.7359 19.5693 102.509 19.5693 108.376V108.389C19.5693 114.269 24.348 119.043 30.2213 119.043C32.2427 119.043 34.1133 118.443 35.7253 117.469V138.083C33.9387 138.416 32.104 138.616 30.2213 138.616C13.5573 138.616 0 125.056 0 108.389V108.389C0 91.7227 13.5573 78.1626 30.2213 78.1626ZM130.504 98.1227L175.123 128.923V216.776L220.132 201.976V142.123C211.888 139.509 204.972 133.936 200.563 126.683V187.816L194.692 189.749V118.656L130.504 74.3359L102.929 93.3626L120.152 105.256L130.504 98.1227Z" 
        />
      </motion.g>
    </motion.svg>
  );
}

// Animated "HAMILTON" Text Wordmark Component
export function HamiltonLogo() {
  return (
    <motion.svg 
      width="480" 
      height="75" 
      viewBox="0 0 715 112" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      <motion.g initial="hidden" animate="visible">
        <motion.path 
          variants={pathVariants}
          d="M88.7395 100.368C88.7395 106.947 89.9635 108.324 95.1655 108.324V109.242H73.8985V108.324C79.2535 108.324 80.3245 106.794 80.3245 99.4502V55.2332H14.8405V100.368C14.8405 106.947 16.0645 108.324 21.2665 108.324V109.242H-0.000515543V108.324C5.35449 108.324 6.42548 106.794 6.42548 99.4502V12.0872C6.42548 4.59019 5.35449 3.06019 -0.000515543 3.06019V2.29518H21.2665V3.06019C16.2175 3.06019 14.8405 4.43718 14.8405 10.7102V51.5612H80.3245V12.0872C80.3245 4.59019 79.2535 3.06019 73.8985 3.06019V2.29518H95.1655V3.06019C90.1165 3.06019 88.8925 4.43718 88.7395 10.7102V100.368ZM204.84 104.346C206.37 107.1 207.9 108.324 211.572 108.324V109.242H190.458V108.324C195.201 108.324 196.578 107.406 194.283 101.745L152.055 12.2402L128.493 65.9432H172.71V69.0032L125.433 72.8282L113.958 99.1442C110.439 107.253 111.51 108.324 116.865 108.324V109.242H99.2702V108.324C102.024 108.324 103.86 108.018 105.39 106.641C106.92 105.264 108.144 103.122 109.827 99.4502L121.302 73.2872L108.144 74.2052V65.9432H124.515L153.279 0.76518H155.727L204.84 104.346ZM317.979 100.98C318.591 107.1 320.121 109.089 325.17 109.089V110.007H304.056V109.089C308.493 109.089 309.717 107.865 309.717 103.428C309.717 102.51 309.717 101.439 309.564 100.215L302.985 20.9612L267.795 111.384H266.265L229.392 22.3382L223.425 100.215C222.966 107.559 225.108 109.089 230.463 109.089V110.007H212.868V109.089C218.223 109.089 219.294 107.253 219.753 100.368L227.403 1.53018H229.851L269.478 97.3082L306.963 1.53018H309.717L317.979 100.98ZM352.219 3.06019C347.323 3.06019 345.946 4.43718 345.793 10.2512V101.286C345.946 107.1 347.323 108.324 352.219 108.324V109.242H330.952V108.324C336.307 108.324 337.378 106.794 337.378 99.4502V12.0872C337.378 4.59019 336.307 3.06019 330.952 3.06019V2.29518H352.219V3.06019ZM433.371 86.1392H434.289L432.759 108.783V109.242H360.237V108.324C365.592 108.324 366.663 106.794 366.663 99.4502V12.0872C366.663 4.59019 365.592 3.06019 360.237 3.06019V2.29518H381.504V3.06019C376.149 3.06019 375.078 4.59019 375.078 11.7812V105.57H411.492C428.016 105.57 430.923 102.816 433.371 86.1392ZM501.067 2.75418L502.597 25.2452H501.679C499.231 8.72119 496.324 5.81418 479.8 5.81418H464.347V101.133C464.5 107.1 465.724 108.324 470.773 108.324V109.242H449.506V108.324C454.861 108.324 455.932 106.794 455.932 99.4502V5.81418H440.479C423.955 5.81418 421.048 8.72119 418.6 25.2452H417.682L419.212 2.75418V2.29518H501.067V2.75418ZM558.515 0.000180423C590.951 0.000180423 609.311 22.6442 609.311 55.6922C609.311 88.8932 590.951 111.384 558.515 111.384C526.079 111.384 507.719 88.8932 507.719 55.6922C507.719 22.6442 526.079 0.000180423 558.515 0.000180423ZM558.515 107.712C584.678 107.712 600.131 86.9042 600.131 55.6922C600.131 24.6332 584.678 3.67218 558.515 3.67218C532.352 3.67218 516.899 24.6332 516.899 55.6922C516.899 86.9042 532.352 107.712 558.515 107.712ZM696.316 2.29518H714.064V3.06019C708.709 3.06019 707.026 4.59019 707.026 11.9342V109.548H704.119L627.772 14.8412L628.078 19.2782V99.7562C628.078 107.253 629.608 108.63 634.963 108.63V109.548H617.368V108.63C622.723 108.63 624.406 107.253 624.406 99.7562V2.29518H627.313L703.354 95.1662V11.9342C703.354 4.59019 701.824 3.06019 696.316 3.06019V2.29518Z" 
        />
      </motion.g>
    </motion.svg>
  );
}

// Recreational spots within 20km of 5B Bank Road
const RECREATIONAL_SPOTS = [
  {
    name: "Ikoyi Club 1938",
    type: "Golf & Sports",
    coords: [3.4279, 6.4520] as [number, number],
    icon: "🏌️‍♂️",
    desc: "Private member club with golf, tennis, and swimming"
  },
  {
    name: "KFC Alfred Rewane",
    type: "Fast Food",
    coords: [3.4220, 6.4520] as [number, number],
    icon: "🍗",
    desc: "NNPC Mega Station branch, Alfred Rewane Road"
  },
  {
    name: "Chicken Republic Awolowo Rd",
    type: "Fast Food",
    coords: [3.4210, 6.4475] as [number, number],
    icon: "🍟",
    desc: "Popular Nigerian fast-food chain branch"
  },
  {
    name: "Muri Okunola Park",
    type: "Park & Event Space",
    coords: [3.4190, 6.4384] as [number, number],
    icon: "🌳",
    desc: "Scenic public park and popular event venue"
  },
  {
    name: "The Palms Shopping Mall",
    type: "Shopping & Cinema",
    coords: [3.4511, 6.4358] as [number, number],
    icon: "🛍️",
    desc: "First modern mall in Lagos with cinema and shops"
  },
  {
    name: "Rufus & Bee (Twin Waters)",
    type: "Arcade & Recreation",
    coords: [3.4682, 6.4357] as [number, number],
    icon: "🎮",
    desc: "Multi-level bowling alley and gaming arcade"
  },
  {
    name: "Landmark Beach & Village",
    type: "Beach & Leisure",
    coords: [3.4402, 6.4258] as [number, number],
    icon: "🏖️",
    desc: "Premium beach club, restaurants, and lounges"
  },
  {
    name: "Freedom Park Lagos",
    type: "Arts & Culture",
    coords: [3.3965, 6.4489] as [number, number],
    icon: "🎭",
    desc: "Cultural center and leisure park on historic grounds"
  },
  {
    name: "Lekki Conservation Centre",
    type: "Nature Reserve",
    coords: [3.5356, 6.4364] as [number, number],
    icon: "🐒",
    desc: "Nature park with Africa's longest canopy walkway"
  }
];

// Helper to calculate distance between two GPS coordinates using the Haversine formula
function calculateDistanceInKm(coords1: [number, number], coords2: [number, number]) {
  const R = 6371; // Earth's radius in km
  const lat1 = coords1[1] * Math.PI / 180;
  const lat2 = coords2[1] * Math.PI / 180;
  const deltaLat = (coords2[1] - coords1[1]) * Math.PI / 180;
  const deltaLng = (coords2[0] - coords1[0]) * Math.PI / 180;

  const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return (R * c).toFixed(1);
}

// Helper to generate a GeoJSON Circle approximation polygon
function createGeoJSONCircle(center: [number, number], radiusInKm: number, points: number = 64) {
  const latitude = center[1];
  const longitude = center[0];
  const distanceX = radiusInKm / (111.32 * Math.cos((latitude * Math.PI) / 180));
  const distanceY = radiusInKm / 110.574;

  const ret = [];
  for (let i = 0; i < points; i++) {
    const theta = (i / points) * (2 * Math.PI);
    const x = distanceX * Math.cos(theta);
    const y = distanceY * Math.sin(theta);
    ret.push([longitude + x, latitude + y]);
  }
  ret.push(ret[0]); // close the polygon

  return {
    type: 'Feature' as const,
    geometry: {
      type: 'Polygon' as const,
      coordinates: [ret]
    },
    properties: {}
  };
}

// -------------------------------------------------------------
// PROCEDURAL THREE.JS BUILDING GENERATOR (MATCHING USER IMAGE)
// -------------------------------------------------------------
function createProceduralBuilding() {
  const buildingGroup = new THREE.Group();

  // Premium High-Fidelity Materials
  const concreteMat = new THREE.MeshStandardMaterial({ 
    color: 0x4a4c50, 
    roughness: 0.45, 
    metalness: 0.1 
  });
  
  const wallMat = new THREE.MeshStandardMaterial({ 
    color: 0xf3f4f6, 
    roughness: 0.75 
  });
  
  const glassMat = new THREE.MeshStandardMaterial({ 
    color: 0x1d2127, 
    roughness: 0.05, 
    metalness: 0.95, 
    transparent: true, 
    opacity: 0.75 
  });
  
  const woodMat = new THREE.MeshStandardMaterial({ 
    color: 0xc29d68, 
    roughness: 0.6 
  });
  
  const ledGlowMat = new THREE.MeshStandardMaterial({ 
    color: 0xffeedd, 
    emissive: 0xffaa44, 
    emissiveIntensity: 3.0 
  });

  // 1. Ground & Parking Podium Cladding (Height: 7 meters)
  // Box base
  const podiumGeo = new THREE.BoxGeometry(16, 7, 12);
  const podium = new THREE.Mesh(podiumGeo, concreteMat);
  podium.position.y = 3.5;
  buildingGroup.add(podium);

  // Vertical wood paneling/slats (podium facade decoration)
  for (let x = -7.6; x <= 7.6; x += 0.8) {
    const slatGeo = new THREE.BoxGeometry(0.12, 6, 0.1);
    const slat = new THREE.Mesh(slatGeo, woodMat);
    slat.position.set(x, 4, 6.05);
    buildingGroup.add(slat);

    const slatBack = slat.clone();
    slatBack.position.z = -6.05;
    buildingGroup.add(slatBack);
  }

  // Entrance Name Sign: "ARIA"
  const signGeo = new THREE.BoxGeometry(2.4, 0.9, 0.15);
  const sign = new THREE.Mesh(signGeo, wallMat);
  sign.position.set(0, 1.6, 6.12);
  buildingGroup.add(sign);

  // 2. Residential Towers (Floors 2 to 11, ~10 floors)
  const floorHeight = 3.4;
  const numFloors = 10;

  for (let i = 0; i < numFloors; i++) {
    const floorY = 7.0 + i * floorHeight;

    // White walls inner core
    const coreGeo = new THREE.BoxGeometry(15, floorHeight - 0.2, 11);
    const core = new THREE.Mesh(coreGeo, wallMat);
    core.position.y = floorY + (floorHeight - 0.2) / 2;
    buildingGroup.add(core);

    // Large glass facade panels on front and back
    const glassGeo = new THREE.BoxGeometry(14.6, floorHeight - 0.5, 0.1);
    const glassFront = new THREE.Mesh(glassGeo, glassMat);
    glassFront.position.set(0, floorY + floorHeight / 2, 5.4);
    buildingGroup.add(glassFront);

    const glassBack = glassFront.clone();
    glassBack.position.z = -5.4;
    buildingGroup.add(glassBack);

    // Custom Rounded Wave-like Balcony Slabs (matching the wave contours in the image)
    const shape = new THREE.Shape();
    const w = 17.0; // slightly wider than core
    const d = 13.0; // slightly deeper than core
    const r = 2.6;  // radius corner curves

    // Draw rounded rectangle
    shape.moveTo(-w/2 + r, -d/2);
    shape.lineTo(w/2 - r, -d/2);
    shape.quadraticCurveTo(w/2, -d/2, w/2, -d/2 + r);
    shape.lineTo(w/2, d/2 - r);
    shape.quadraticCurveTo(w/2, d/2, w/2 - r, d/2);
    shape.lineTo(-w/2 + r, d/2);
    shape.quadraticCurveTo(-w/2, d/2, -w/2, d/2 - r);
    shape.lineTo(-w/2, -d/2 + r);
    shape.quadraticCurveTo(-w/2, -d/2, -w/2 + r, -d/2);

    const extrudeSettings = {
      depth: 0.9,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.15,
      bevelThickness: 0.15
    };

    const balconyGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const balcony = new THREE.Mesh(balconyGeo, concreteMat);
    balcony.rotation.x = Math.PI / 2;
    // position balcony slab near the top of the floor
    balcony.position.set(0, floorY + 0.9, 0);
    buildingGroup.add(balcony);

    // Emissive warm yellow LED lighting strip on underside of balcony curves
    const ledGeo = new THREE.BoxGeometry(w - 0.3, 0.08, d - 0.3);
    const led = new THREE.Mesh(ledGeo, ledGlowMat);
    led.position.set(0, floorY - 0.04, 0);
    buildingGroup.add(led);
  }

  // 3. Penthouse Crown Roof Slab
  const roofY = 7.0 + numFloors * floorHeight;
  const roofSlabGeo = new THREE.BoxGeometry(17.4, 1.4, 13.4);
  const roofSlab = new THREE.Mesh(roofSlabGeo, concreteMat);
  roofSlab.position.y = roofY + 0.7;
  buildingGroup.add(roofSlab);

  return buildingGroup;
}

// Building georeferenced coordinate transforms
const buildingOrigin: [number, number] = [3.4326, 6.4522];
const buildingAltitude = 0;
const buildingRotate = [Math.PI / 2, 0, 0];

const buildingAsMercatorCoordinate = maplibregl.MercatorCoordinate.fromLngLat(
  buildingOrigin,
  buildingAltitude
);

const buildingTransform = {
  translateX: buildingAsMercatorCoordinate.x,
  translateY: buildingAsMercatorCoordinate.y,
  translateZ: buildingAsMercatorCoordinate.z,
  rotateX: buildingRotate[0],
  rotateY: buildingRotate[1],
  rotateZ: buildingRotate[2],
  scale: buildingAsMercatorCoordinate.meterInMercatorCoordinateUnits()
};

interface CustomThreeLayer extends maplibregl.CustomLayerInterface {
  camera?: THREE.Camera;
  scene?: THREE.Scene;
  renderer?: THREE.WebGLRenderer;
  map?: maplibregl.Map;
}

// MapLibre Custom Layer configuration using Three.js
const customBuildingLayer: CustomThreeLayer = {
  id: '3d-building-model',
  type: 'custom',
  renderingMode: '3d',
  onAdd(map, gl) {
    this.camera = new THREE.Camera();
    this.scene = new THREE.Scene();

    // Key directional light representing sunlight
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
    directionalLight.position.set(30, 70, 30).normalize();
    this.scene.add(directionalLight);

    // Bounce fill light representing sky reflection
    const directionalLight2 = new THREE.DirectionalLight(0xaaccff, 0.4);
    directionalLight2.position.set(-30, 50, -30).normalize();
    this.scene.add(directionalLight2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    this.scene.add(ambientLight);

    // Procedural building twin
    const building = createProceduralBuilding();
    this.scene.add(building);

    this.map = map;
    this.renderer = new THREE.WebGLRenderer({
      canvas: map.getCanvas(),
      context: gl,
      antialias: true
    });
    this.renderer.autoClear = false;
  },
  render(_gl, args) {
    if (!this.camera || !this.scene || !this.renderer) return;

    const rotationX = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(1, 0, 0),
      buildingTransform.rotateX
    );
    const rotationY = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(0, 1, 0),
      buildingTransform.rotateY
    );
    const rotationZ = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(0, 0, 1),
      buildingTransform.rotateZ
    );

    const m = new THREE.Matrix4().fromArray(args.defaultProjectionData.mainMatrix);
    const l = new THREE.Matrix4()
      .makeTranslation(
        buildingTransform.translateX,
        buildingTransform.translateY,
        buildingTransform.translateZ
      )
      .scale(
        new THREE.Vector3(
          buildingTransform.scale,
          -buildingTransform.scale,
          buildingTransform.scale
        )
      )
      .multiply(rotationX)
      .multiply(rotationY)
      .multiply(rotationZ);

    this.camera.projectionMatrix = m.multiply(l);
    this.renderer.resetState();
    this.renderer.render(this.scene, this.camera);
  }
};

// -------------------------------------------------------------
// PROPERTY DETAILS SPLASH PAGE COMPONENT
// -------------------------------------------------------------
function PropertyDetails({ onExplore }: { onExplore: () => void }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'radial-gradient(circle at center, #18181c 0%, #09090b 100%)',
      color: '#ffffff',
      padding: '40px 24px',
      boxSizing: 'border-box',
      position: 'relative',
      overflowY: 'auto'
    }}>
      {/* Background Architectural Grid Pattern Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.03,
        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        pointerEvents: 'none'
      }} />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '680px',
          textAlign: 'center',
          zIndex: 2
        }}
      >
        {/* Animated Crest */}
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
          <HamiltonCrest />
        </div>

        {/* Animated Wordmark Logo */}
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
          <HamiltonLogo />
        </div>

        {/* Divider */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '100px' }}
          transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
          style={{ height: '1.5px', background: 'linear-gradient(90deg, transparent, #d4af37, transparent)', marginBottom: '24px' }}
        />

        {/* Heading Info */}
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1.2, duration: 1 }}
          style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#c5a880',
            margin: '0 0 16px 0',
            fontFamily: 'var(--font-heading, inherit)'
          }}
        >
          Old Ikoyi, Lagos
        </motion.h2>

        {/* Description Paragraph */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.4, duration: 1 }}
          style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#e4e4e7',
            margin: '0 0 32px 0',
            fontWeight: 400,
            textShadow: '0 2px 4px rgba(0,0,0,0.6)'
          }}
        >
          An exclusive architectural enclave situated at 5B, Bank Road. Nestled along the tranquil, tree-lined corridors of Old Ikoyi, offering boutique luxury residences framed by the beautiful fairways of the Ikoyi Club Golf Course.
        </motion.p>

        {/* Info Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            width: '100%',
            marginBottom: '40px'
          }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            padding: '20px 16px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📍</div>
            <div style={{ fontSize: '0.7rem', color: '#c5a880', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Location</div>
            <div style={{ fontSize: '0.85rem', marginTop: '6px', fontWeight: 600 }}>Eti-Osa LGA</div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            padding: '20px 16px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🏌️‍♂️</div>
            <div style={{ fontSize: '0.7rem', color: '#c5a880', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Amenity</div>
            <div style={{ fontSize: '0.85rem', marginTop: '6px', fontWeight: 600 }}>Golf Club Views</div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            padding: '20px 16px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🌐</div>
            <div style={{ fontSize: '0.7rem', color: '#c5a880', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Coordinates</div>
            <div style={{ fontSize: '0.85rem', marginTop: '6px', fontFamily: 'monospace', fontWeight: 600 }}>6.4522°N, 3.4326°E</div>
          </div>
        </motion.div>

        {/* Explore Button */}
        <motion.button 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          onClick={onExplore}
          style={{
            background: 'linear-gradient(135deg, #c5a880 0%, #a38258 100%)',
            border: 'none',
            borderRadius: '16px',
            padding: '16px 36px',
            color: '#0f0f11',
            fontSize: '0.95rem',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 4px 24px rgba(197, 168, 128, 0.25)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(197, 168, 128, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(197, 168, 128, 0.25)';
          }}
        >
          <span>Explore 3D Property Map</span>
          <span style={{ fontSize: '1.1rem', transition: 'transform 0.2s' }}>→</span>
        </motion.button>
      </motion.div>
    </div>
  );
}

// -------------------------------------------------------------
// INTERACTIVE MAP COMPONENT WITH 3D CUSTOM BUILDING TWIN
// -------------------------------------------------------------
function PropertyMap({ onBack }: { onBack: () => void }) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<maplibregl.Marker[]>([]);

  // States for live HUD display
  const [zoom, setZoom] = useState(17);
  const [center, setCenter] = useState<[number, number]>([3.4326, 6.4522]);
  const [pitch, setPitch] = useState(60);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Create the Maplibre GL map instance centered on 5B Bank Road, Ikoyi, Lagos
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://tiles.openfreemap.org/styles/bright', // clean bright style matching reference
      center: [3.4326, 6.4522], // 5B Bank Road coordinates
      zoom: 17,
      pitch: 60,
      bearing: 0,
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

      // Add a premium marker for 5B, Bank Road
      const centerEl = document.createElement('div');
      centerEl.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; font-family: -apple-system, BlinkMacSystemFont, sans-serif;">
          <div style="background: #ff3b30; width: 32px; height: 32px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.3); animation: markerPulse 2s infinite;">
            <span style="font-size: 14px; color: white;">🏠</span>
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
      const centerMarker = new maplibregl.Marker({ element: centerEl })
        .setLngLat([3.4326, 6.4522])
        .addTo(map);
      markersRef.current.push(centerMarker);

      // Add pins for all recreational spots
      RECREATIONAL_SPOTS.forEach((spot) => {
        const el = document.createElement('div');
        el.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; font-family: -apple-system, BlinkMacSystemFont, sans-serif; cursor: pointer;">
            <div style="background: #007aff; width: 28px; height: 28px; border-radius: 50%; border: 2.5px solid white; display: flex; align-items: center; justify-content: center; box-shadow: 0 3px 8px rgba(0,0,0,0.25);">
              <span style="font-size: 13px; color: white;">${spot.icon}</span>
            </div>
            <div style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(4px); padding: 3px 8px; border-radius: 6px; border: 1px solid rgba(0,0,0,0.08); font-size: 9px; font-weight: 700; color: #1c1c1e; box-shadow: 0 2px 6px rgba(0,0,0,0.1); margin-top: 4px; white-space: nowrap;">
              ${spot.name}
            </div>
          </div>
        `;

        el.addEventListener('click', () => {
          map.flyTo({
            center: spot.coords,
            zoom: 16,
            pitch: 55,
            duration: 1500,
            essential: true
          });
        });

        const spotMarker = new maplibregl.Marker({ element: el })
          .setLngLat(spot.coords)
          .addTo(map);
        markersRef.current.push(spotMarker);
      });
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

      // Add 20km Radius Circle GeoJSON Source and Layers
      const circleGeoJSON = createGeoJSONCircle([3.4326, 6.4522], 20);
      map.addSource('radius-circle-src', {
        type: 'geojson',
        data: circleGeoJSON
      });

      // Translucent gold filled circle
      map.addLayer({
        id: 'radius-circle-fill',
        type: 'fill',
        source: 'radius-circle-src',
        paint: {
          'fill-color': '#c5a880',
          'fill-opacity': 0.04
        }
      });

      // Dashed gold border line
      map.addLayer({
        id: 'radius-circle-outline',
        type: 'line',
        source: 'radius-circle-src',
        paint: {
          'line-color': '#c5a880',
          'line-width': 1.5,
          'line-dasharray': [4, 4]
        }
      });

      // Register Three.js custom 3D building twin layer
      if (!map.getLayer('3d-building-model')) {
        map.addLayer(customBuildingLayer);
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
      markersRef.current.forEach(m => m.remove());
      map.remove();
    };
  }, []);

  const handleFocusSite = () => {
    if (!mapRef.current) return;
    mapRef.current.flyTo({
      center: [3.4326, 6.4522],
      zoom: 17.5,
      pitch: 65,
      bearing: 0,
      duration: 1500,
      essential: true
    });
  };

  const handleFit20km = () => {
    if (!mapRef.current) return;
    mapRef.current.flyTo({
      center: [3.4326, 6.4522],
      zoom: 11.2,
      pitch: 0,
      bearing: 0,
      duration: 1500,
      essential: true
    });
  };

  const handleFlyToSpot = (coords: [number, number]) => {
    if (!mapRef.current) return;
    mapRef.current.flyTo({
      center: coords,
      zoom: 16,
      pitch: 55,
      duration: 1500,
      essential: true
    });
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
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
        width: '320px',
        maxHeight: 'calc(100vh - 40px)',
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        borderRadius: '24px',
        padding: '24px',
        color: '#1c1c1e',
        zIndex: 10,
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
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
          <button 
            onClick={onBack}
            style={{
              background: 'rgba(0, 0, 0, 0.05)',
              border: 'none',
              borderRadius: '10px',
              padding: '6px 12px',
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#3a3a3c',
              transition: 'background 0.2s',
              fontFamily: 'inherit'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)'}
          >
            ← Back
          </button>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(0, 0, 0, 0.06)', margin: 0 }} />

        {/* View Toggles */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={handleFocusSite}
            style={{
              flex: 1,
              background: '#007aff',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              padding: '8px 12px',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0, 122, 255, 0.2)',
              fontFamily: 'inherit'
            }}
          >
            🔍 Focus Site
          </button>
          <button
            onClick={handleFit20km}
            style={{
              flex: 1,
              background: 'rgba(0, 0, 0, 0.06)',
              color: '#1c1c1e',
              border: 'none',
              borderRadius: '10px',
              padding: '8px 12px',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'inherit'
            }}
          >
            ⭕ 20km Zone
          </button>
        </div>

        {/* Scrollable Recreational Spot List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minHeight: 0 }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#8e8e93', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Recreation within 20km
          </span>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '8px', 
            overflowY: 'auto', 
            maxHeight: '220px',
            paddingRight: '4px' 
          }}>
            {RECREATIONAL_SPOTS.map((spot) => {
              const distance = calculateDistanceInKm([3.4326, 6.4522], spot.coords);
              return (
                <div
                  key={spot.name}
                  onClick={() => handleFlyToSpot(spot.coords)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'rgba(0, 0, 0, 0.03)',
                    border: '1px solid rgba(0, 0, 0, 0.02)',
                    borderRadius: '12px',
                    padding: '10px 12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.06)';
                    e.currentTarget.style.transform = 'translateX(2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.03)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{ fontSize: '1.25rem' }}>{spot.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: '#1c1c1e' }}>
                      {spot.name}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#8e8e93', fontWeight: 500 }}>
                      {spot.type}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#007aff', fontFamily: 'monospace' }}>
                    {distance}km
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(0, 0, 0, 0.06)', margin: 0 }} />

        {/* Live Map Coordinates & Stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem' }}>
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ color: '#8e8e93', fontWeight: 500 }}>Map Center:</span>
            <div style={{ 
              fontFamily: 'monospace', 
              fontSize: '0.75rem', 
              background: 'rgba(0, 0, 0, 0.04)', 
              padding: '6px 10px', 
              borderRadius: '8px', 
              color: '#3a3a3c',
              border: '1px solid rgba(0, 0, 0, 0.02)'
            }}>
              Lng: {center[0]} | Lat: {center[1]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// MAIN APP COMPONENT
// -------------------------------------------------------------
export default function App() {
  const [view, setView] = useState<'details' | 'map'>('details');

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#09090b' }}>
      <AnimatePresence mode="wait">
        {view === 'details' ? (
          <motion.div
            key="details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', height: '100%' }}
          >
            <PropertyDetails onExplore={() => setView('map')} />
          </motion.div>
        ) : (
          <motion.div
            key="map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', height: '100%' }}
          >
            <PropertyMap onBack={() => setView('details')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
