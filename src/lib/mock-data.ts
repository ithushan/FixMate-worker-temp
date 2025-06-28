export type Job = {
  id: string;
  title: string;
  type: 'Plumbing' | 'Carpentry' | 'Electrical';
  distance: string;
  description: string;
  customer: {
    name: string;
    avatarUrl: string;
  };
  status: 'new' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
  scheduledTime?: string;
  dailyNotes?: string;
  afterPhotoUrl?: string;
  summary?: string;
  estimatedTime: string;
};

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Leaky faucet in kitchen',
    type: 'Plumbing',
    distance: '2 km away',
    description: 'The kitchen sink faucet has been dripping constantly for the past two days. It seems to be a slow but steady drip. Need someone to diagnose and fix it.',
    customer: {
      name: 'Nimal Perera',
      avatarUrl: 'https://placehold.co/100x100.png',
    },
    status: 'new',
    estimatedTime: '1-2 hours',
  },
  {
    id: '2',
    title: 'Fix broken door hinge',
    type: 'Carpentry',
    distance: '5 km away',
    description: 'The main bedroom door has come off one of its hinges. It needs to be re-attached securely. The door is made of solid wood.',
    customer: {
      name: 'Sunita De Silva',
      avatarUrl: 'https://placehold.co/100x100.png',
    },
    status: 'new',
    estimatedTime: '1 hour',
  },
  {
    id: '3',
    title: 'Install new ceiling fan',
    type: 'Electrical',
    distance: '3.5 km away',
    description: 'I have purchased a new ceiling fan and need a qualified electrician to install it in the living room. The old fan has already been removed.',
    customer: {
      name: 'Ravi Fernando',
      avatarUrl: 'https://placehold.co/100x100.png',
    },
    status: 'confirmed',
    scheduledTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours from now
    estimatedTime: '2 hours',
  },
  {
    id: '4',
    title: 'Unclog bathroom drain',
    type: 'Plumbing',
    distance: '1.5 km away',
    description: 'The shower drain is completely clogged and water is not draining at all. Have tried using chemical cleaners but it did not work.',
    customer: {
      name: 'Anusha Kumari',
      avatarUrl: 'https://placehold.co/100x100.png',
    },
    status: 'completed',
    scheduledTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    estimatedTime: '1 hour',
    dailyNotes: 'Used a plumbing snake to clear a major hair clog. Flushed the drain with high-pressure water to ensure it is completely clear.',
    afterPhotoUrl: 'https://placehold.co/600x400.png',
  },
];

export const skills = ['Plumbing', 'Carpentry', 'Electrical', 'Painting', 'Masonry', 'Welding'];

export type Review = {
    id: string;
    jobTitle: string;
    customerName: string;
    rating: number;
    comment: string;
    date: string;
};

export const reviews: Review[] = [
    {
        id: '1',
        jobTitle: 'Unclog bathroom drain',
        customerName: 'Anusha Kumari',
        rating: 5,
        comment: 'Very professional and quick service. The drain is working perfectly now. Highly recommended!',
        date: '2 days ago',
    },
    {
        id: '2',
        jobTitle: 'Fixed wiring issues',
        customerName: 'Kamal Jayasuriya',
        rating: 4,
        comment: 'Did a good job finding the fault. Took a bit longer than expected but the work was solid.',
        date: '1 week ago',
    }
];

export const workerProfile = {
    name: 'Saman Rathnayake',
    email: 'saman.r@example.com',
    phone: '+94 77 123 4567',
    skill: 'Electrical',
    bio: 'Certified electrician with over 10 years of experience in residential and commercial wiring, installations, and repairs.',
    location: 'Jaffna, Sri Lanka',
    serviceArea: 'Jaffna, Vavuniya',
    profilePhotoUrl: 'https://placehold.co/150x150.png',
    workPhotos: [
        'https://placehold.co/400x300.png',
        'https://placehold.co/400x300.png',
        'https://placehold.co/400x300.png',
    ]
}
