export interface PhilosophyStory {
  title: string;
  tagline: string;
  content: string;
  iconName: "Heart" | "ShieldCheck" | "Smile";
}

export interface CourseItem {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  duration: string;
  schedule: string;
  price: number;
  currency: string;
  popular?: boolean;
  badge?: string;
  description: string;
  features: string[];
}

export interface SocialLink {
  platform: "Instagram" | "WhatsApp" | "Phone" | "Email";
  label: string;
  displayValue: string;
  href: string;
  iconName: "Instagram" | "MessageCircle" | "Phone" | "Mail";
  colorClass: string;
}

export interface CoachProfileData {
  name: string;
  title: string;
  focusAreas: string[];
  headline: string;
  highlightWords: string[];
  heroIntro: string;
  philosophy: {
    heading: string;
    stories: PhilosophyStory[];
  };
  image: {
    src: string;
    alt: string;
    fallbackInitials: string;
  };
  courses: CourseItem[];
  contact: {
    phone: string;
    whatsappNumber: string;
    whatsappPrefillMessage: string;
    instagramHandle: string;
    instagramUrl: string;
    email: string;
    links: SocialLink[];
  };
}

export const coachData: CoachProfileData = {
  name: "Debashree Ghosh",
  title: "Strength & Running Coach",
  focusAreas: [
    "Everyday Strength",
    "Injury-Aware Running",
    "1-on-1 Guidance",
  ],
  headline: "Build Strength. Run Resilient.",
  highlightWords: ["Strength.", "Resilient."],
  heroIntro:
    "Hi, I’m Deb! I’m a mum of two teenage boys, a runner, a strength-training enthusiast, and someone who has learnt that getting stronger makes life a whole lot easier. After my kids came along, I struggled to find my way back to fitness. A chance decision to join a yoga class led me to running, which took me from my first 5K to 11 full marathons, ultramarathons, and qualifying for the 2026 Boston and Sydney Marathons. Now, I’m here to help you become a stronger version of yourself for everyday life—without making fitness feel like another chore.",
  philosophy: {
    heading: "Fitness is about living the life you want.",
    stories: [
      {
        title: "Strength for Real Life",
        tagline: "Core Philosophy",
        content:
          "Over the last 11 years, I’ve learnt that fitness isn't about looking a certain way or chasing a number on a scale. It’s about being strong enough to carry the groceries, climb the stairs, keep up with the kids, and stay independent as we get older.",
        iconName: "Heart",
      },
      {
        title: "Adapting Through Life's Stages",
        tagline: "Patience & Consistency",
        content:
          "Training looks different at different stages of life. I’ve trained through the post-pregnancy years, figured out how to juggle work and kids, and now I’m navigating the joys of perimenopause. Our bodies are capable of so much when we give them the right training, patience, and consistency.",
        iconName: "ShieldCheck",
      },
      {
        title: "Enjoying the Journey Together",
        tagline: "The Ultimate Goal",
        content:
          "Whether you want to get stronger, start running, complete your first 5K or 10K, or simply feel fitter, I’d love to help you get there. Let’s get stronger, run a little, laugh at ourselves occasionally, and enjoy the journey.",
        iconName: "Smile",
      },
    ],
  },
  image: {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
    alt: "Coach Debashree Ghosh running and strength coaching",
    fallbackInitials: "DG",
  },
  courses: [
    {
      id: "functional-strength-one-on-one",
      title: "Online Functional Strength Training — One-on-One",
      slug: "online-functional-strength-training",
      tagline: "5–6 week program • Individual attention for everyday movement",
      duration: "5–6 Weeks",
      schedule: "2–3 online sessions / week (55 mins each)",
      price: 250,
      currency: "USD",
      badge: "1-on-1 Coaching",
      description:
        "Individual attention to understand your specific needs, correct form, and help you train safely for everyday activities.",
      features: [
        "2–3 online sessions per week (55 mins each)",
        "20 mins: Warm-up + Mobility",
        "20 mins: Focused Strength Workout",
        "15 mins: Cool-down & Recovery",
        "Personalized form correction & direct coaching",
      ],
    },
    {
      id: "couch-to-5k",
      title: "Couch to 5K",
      slug: "couch-to-5k",
      tagline: "12-week program • From zero running to your first 5K finish",
      duration: "12 Weeks",
      schedule: "Progressive running schedule + strength routines",
      price: 300,
      currency: "USD",
      popular: true,
      badge: "Most Popular",
      description:
        "Takes you step-by-step from little or no running experience to comfortably completing your first 5K.",
      features: [
        "Personalised 12-week running & strength plan",
        "Initial 1-on-1 kickoff call",
        "Weekly online sessions for form correction & progress",
        "Focus on building capacity and injury awareness",
        "Sustainable pacing without feeling overwhelmed",
      ],
    },
    {
      id: "couch-to-10k",
      title: "Couch to 10K",
      slug: "couch-to-10k",
      tagline: "12-week program • Build endurance and confidence step-by-step",
      duration: "12 Weeks",
      schedule: "Structured endurance, mobility & strength roadmap",
      price: 350,
      currency: "USD",
      badge: "Distance Builder",
      description:
        "Gradually build your endurance, strength, and confidence to complete a 10K without rushing the process.",
      features: [
        "Structured 12-week running & strength plan",
        "Initial 1-on-1 goal-setting call",
        "Weekly online sessions for mobility, form, and adjustments",
        "Designed for consistency and arriving at race day prepared",
        "Safe mileage progression & injury-proofing routines",
      ],
    },
  ],
  contact: {
    phone: "+1 (555) 382-9104",
    whatsappNumber: "15553829104",
    whatsappPrefillMessage:
      "Hi Coach Debashree! I'm interested in your strength and running coaching programs and would love to chat.",
    instagramHandle: "@debashreeghosh.run",
    instagramUrl: "https://instagram.com/debashreeghosh.run",
    email: "debashree@debashreeghosh.com",
    links: [
      {
        platform: "WhatsApp",
        label: "Chat on WhatsApp",
        displayValue: "+1 (555) 382-9104",
        href: "https://wa.me/15553829104?text=Hi%20Coach%20Debashree!%20I'm%20interested%20in%20your%20strength%20and%20running%20coaching%20programs%20and%20would%20love%20to%20chat.",
        iconName: "MessageCircle",
        colorClass: "hover:border-emerald-500 hover:text-emerald-400 group-hover:bg-emerald-500/10",
      },
      {
        platform: "Phone",
        label: "Direct Phone Call",
        displayValue: "+1 (555) 382-9104",
        href: "tel:+15553829104",
        iconName: "Phone",
        colorClass: "hover:border-rose-500 hover:text-rose-400 group-hover:bg-rose-500/10",
      },
      {
        platform: "Instagram",
        label: "Follow on Instagram",
        displayValue: "@debashreeghosh.run",
        href: "https://instagram.com/debashreeghosh.run",
        iconName: "Instagram",
        colorClass: "hover:border-pink-500 hover:text-pink-400 group-hover:bg-pink-500/10",
      },
      {
        platform: "Email",
        label: "Direct Inquiries",
        displayValue: "debashree@debashreeghosh.com",
        href: "mailto:debashree@debashreeghosh.com",
        iconName: "Mail",
        colorClass: "hover:border-sky-500 hover:text-sky-400 group-hover:bg-sky-500/10",
      },
    ],
  },
};
