export const WEAPONS = [
  // Assault Rifles
  {
    id: 'rifle1',
    name: 'AK-203',
    type: 'Assault Rifle',
    image: 'https://images.unsplash.com/photo-1632435499152-18838be77960',
    description: '7.62×39mm assault rifle with enhanced accuracy',
    stock: 2500,
    criticalLevel: 1000,
    monthlyProduction: 500
  },
  {
    id: 'rifle2',
    name: 'INSAS',
    type: 'Assault Rifle',
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f',
    description: '5.56×45mm NATO standard issue rifle',
    stock: 3500,
    criticalLevel: 1200,
    monthlyProduction: 600
  },
  // Shotguns
  {
    id: 'shotgun1',
    name: 'SPAS-15',
    type: 'Combat Shotgun',
    image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
    description: '12 gauge combat shotgun',
    stock: 1200,
    criticalLevel: 500,
    monthlyProduction: 200
  },
  // Sniper Rifles
  {
    id: 'sniper1',
    name: 'Dragunov SVD',
    type: 'Sniper Rifle',
    image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
    description: '7.62×54mmR semi-automatic sniper',
    stock: 800,
    criticalLevel: 300,
    monthlyProduction: 100
  },
  // Machine Guns
  {
    id: 'mg1',
    name: 'PKM',
    type: 'Machine Gun',
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f',
    description: '7.62×54mmR general-purpose machine gun',
    stock: 1500,
    criticalLevel: 600,
    monthlyProduction: 200
  },
  // Grenades
  {
    id: 'grenade1',
    name: 'F-1',
    type: 'Hand Grenade',
    image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
    description: 'Defensive fragmentation grenade',
    stock: 10000,
    criticalLevel: 4000,
    monthlyProduction: 2000
  },
  {
    id: 'grenade2',
    name: 'RGD-5',
    type: 'Hand Grenade',
    image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
    description: 'Offensive fragmentation grenade',
    stock: 8000,
    criticalLevel: 3000,
    monthlyProduction: 1500
  },
  {
    id: 'grenade3',
    name: 'M67',
    type: 'Hand Grenade',
    image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
    description: 'Time-delayed fragmentation grenade',
    stock: 12000,
    criticalLevel: 5000,
    monthlyProduction: 2500
  },
  // Missiles
  {
    id: 'missile1',
    name: 'BrahMos',
    type: 'Cruise Missile',
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f',
    description: 'Supersonic cruise missile',
    stock: 100,
    criticalLevel: 40,
    monthlyProduction: 10
  },
  {
    id: 'missile2',
    name: 'Prithvi',
    type: 'Ballistic Missile',
    image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
    description: 'Surface-to-surface ballistic missile',
    stock: 150,
    criticalLevel: 50,
    monthlyProduction: 15
  },
  {
    id: 'missile3',
    name: 'Agni-V',
    type: 'Ballistic Missile',
    image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
    description: 'Intercontinental ballistic missile',
    stock: 50,
    criticalLevel: 20,
    monthlyProduction: 5
  },
  {
    id: 'missile4',
    name: 'Akash',
    type: 'Surface-to-Air Missile',
    image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
    description: 'Medium-range surface-to-air missile',
    stock: 200,
    criticalLevel: 80,
    monthlyProduction: 20
  }
];

export const AMMUNITION = {
  'rifle1': [
    { 
      id: 'ammo1', 
      name: '7.62×39mm', 
      type: 'Standard FMJ',
      image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f',
      stock: 150000,
      criticalLevel: 50000,
      monthlyProduction: 30000
    },
    {
      id: 'ammo2',
      name: '7.62×39mm',
      type: 'Armor Piercing',
      image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f',
      stock: 75000,
      criticalLevel: 25000,
      monthlyProduction: 15000
    }
  ],
  'rifle2': [
    {
      id: 'ammo3',
      name: '5.56×45mm',
      type: 'NATO Standard',
      image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f',
      stock: 200000,
      criticalLevel: 60000,
      monthlyProduction: 40000
    }
  ],
  'shotgun1': [
    { 
      id: 'ammo4', 
      name: '12 Gauge', 
      type: 'Buckshot',
      image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
      stock: 100000,
      criticalLevel: 40000,
      monthlyProduction: 25000
    },
    {
      id: 'ammo5',
      name: '12 Gauge',
      type: 'Slug',
      image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
      stock: 50000,
      criticalLevel: 20000,
      monthlyProduction: 12000
    }
  ],
  'sniper1': [
    {
      id: 'ammo6',
      name: '7.62×54mmR',
      type: 'Match Grade',
      image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
      stock: 50000,
      criticalLevel: 15000,
      monthlyProduction: 10000
    }
  ],
  'mg1': [
    {
      id: 'ammo7',
      name: '7.62×54mmR',
      type: 'Belt-Fed',
      image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
      stock: 300000,
      criticalLevel: 100000,
      monthlyProduction: 60000
    }
  ],
  'missile1': [
    {
      id: 'missile_warhead1',
      name: 'BrahMos Warhead',
      type: 'Conventional',
      image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f',
      stock: 50,
      criticalLevel: 20,
      monthlyProduction: 5
    }
  ],
  'missile2': [
    {
      id: 'missile_warhead2',
      name: 'Prithvi Warhead',
      type: 'Conventional',
      image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
      stock: 75,
      criticalLevel: 30,
      monthlyProduction: 8
    }
  ],
  'missile3': [
    {
      id: 'missile_warhead3',
      name: 'Agni-V Warhead',
      type: 'Strategic',
      image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
      stock: 25,
      criticalLevel: 10,
      monthlyProduction: 3
    }
  ],
  'missile4': [
    {
      id: 'missile_warhead4',
      name: 'Akash Warhead',
      type: 'High-Explosive',
      image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
      stock: 100,
      criticalLevel: 40,
      monthlyProduction: 10
    }
  ],
  'grenade1': [
    {
      id: 'grenade_fuse1',
      name: 'F-1 Fuse',
      type: 'Time Delay',
      image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
      stock: 15000,
      criticalLevel: 5000,
      monthlyProduction: 3000
    }
  ],
  'grenade2': [
    {
      id: 'grenade_fuse2',
      name: 'RGD-5 Fuse',
      type: 'Impact',
      image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
      stock: 12000,
      criticalLevel: 4000,
      monthlyProduction: 2500
    }
  ],
  'grenade3': [
    {
      id: 'grenade_fuse3',
      name: 'M67 Fuse',
      type: 'Time Delay',
      image: 'https://images.unsplash.com/photo-1584552532191-cdc87c607b44',
      stock: 18000,
      criticalLevel: 6000,
      monthlyProduction: 3500
    }
  ]
};