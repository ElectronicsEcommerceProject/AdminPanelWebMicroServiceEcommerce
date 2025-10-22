// Hardcoded banner data
const bannersData = [
  {
    id: 1,
    title: 'Summer Sale',
    description: 'Get amazing discounts on all electronics',
    price: 'Starting ₹1,999',
    discount: '58% OFF',
    buttonText: 'Shop Now',
    backgroundStyle: 'greenToBlue',
    bannerImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
    active: true,
    createdAt: '22/10/2025'
  },
  {
    id: 2,
    title: 'Winter Special',
    description: 'Best deals on winter gadgets',
    price: 'From ₹999',
    discount: '50% OFF',
    buttonText: 'Explore',
    backgroundStyle: 'blueToPurple',
    bannerImage: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=400',
    active: true,
    createdAt: '02/10/2025'
  },
  {
    id: 3,
    title: 'Clearance Sale',
    description: 'Limited time clearance offers',
    price: 'Only ₹999',
    discount: '60% OFF',
    buttonText: 'Grab Deal',
    backgroundStyle: 'purpleGradient',
    bannerImage: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400',
    active: true,
    createdAt: '21/10/2025'
  },
  {
    id: 4,
    title: 'Tech Festival',
    description: 'Latest tech at unbeatable prices',
    price: '₹777 Only',
    discount: '77% OFF',
    buttonText: 'Buy Now',
    backgroundStyle: 'orangeGradient',
    bannerImage: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
    active: true,
    createdAt: '10/07/2025'
  },
  {
    id: 5,
    title: 'Premium Collection',
    description: 'Premium electronics collection',
    price: 'From ₹333',
    discount: '35% OFF',
    buttonText: 'View All',
    backgroundStyle: 'tealToBlue',
    bannerImage: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?w=400',
    active: true,
    createdAt: '10/07/2025'
  },
  {
    id: 6,
    title: 'Mega Deal',
    description: 'Don\'t miss this mega offer',
    price: 'Just ₹1,999',
    discount: '40% OFF',
    buttonText: 'Get Offer',
    backgroundStyle: 'redGradient',
    bannerImage: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
    active: true,
    createdAt: '10/07/2025'
  }
];

export const bannerApi = {
  getAllBanners: async () => {
    // Sort by createdAt in descending order (latest first)
    return [...bannersData].sort((a, b) => {
      const dateA = new Date(a.createdAt.split('/').reverse().join('-'));
      const dateB = new Date(b.createdAt.split('/').reverse().join('-'));
      return dateB - dateA;
    });
  },
  
  createBanner: async (bannerData) => {
    const newBanner = {
      ...bannerData,
      id: Date.now(),
      createdAt: new Date().toLocaleDateString('en-GB')
    };
    bannersData.push(newBanner);
    return { success: true, data: newBanner };
  },
  
  updateBanner: async (id, bannerData) => {
    const index = bannersData.findIndex(banner => banner.id === id);
    if (index !== -1) {
      bannersData[index] = { ...bannerData, id };
      return { success: true, data: bannersData[index] };
    }
    return { success: false };
  },
  
  deleteBanner: async (id) => {
    const index = bannersData.findIndex(banner => banner.id === id);
    if (index !== -1) {
      bannersData.splice(index, 1);
      return { success: true };
    }
    return { success: false };
  },
  
  toggleBannerStatus: async (id) => {
    const banner = bannersData.find(banner => banner.id === id);
    if (banner) {
      banner.active = !banner.active;
      return { success: true };
    }
    return { success: false };
  }
};

export const backgroundStyles = {
  greenToBlue: 'bg-gradient-to-r from-teal-500 via-green-500 to-blue-600',
  blueToPurple: 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600',
  purpleGradient: 'bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600',
  orangeGradient: 'bg-gradient-to-r from-yellow-600 via-orange-500 to-red-600',
  tealToBlue: 'bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600',
  redGradient: 'bg-gradient-to-r from-orange-600 via-red-500 to-pink-600',
  pinkGradient: 'bg-gradient-to-r from-pink-500 via-rose-500 to-red-500',
  emeraldGradient: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500'
};
