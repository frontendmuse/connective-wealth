import walletIcon from '../../src/assets/images/svgs/wallet.svg';
import peopleIcon from '../../src/assets/images/svgs/user-diversity.svg';
import locationIcon from '../../src/assets/images/svgs/location.svg';
import starIcon from '../../src/assets/images/svgs/stars.svg';
import diversityIcon from '../../src/assets/images/svgs/diversity-blue.svg';
import distanceIcon from '../../src/assets/images/svgs/location-blue.svg';
import starsIcon from '../../src/assets/images/svgs/stars-blue.svg';
import partnerExchange from '../../src/assets/images/svgs/partner-exchange.svg';
import shieldWithHeart from '../../src/assets/images/svgs/shield-with-heart.svg';
import tableChart from '../../src/assets/images/svgs/table-chart-view.svg';
import personSearch from '../../src/assets/images/svgs/person-search.svg';
import provenAtScale from '../../src/assets/images/svgs/proven-at-scale.svg';
import cognition from '../../src/assets/images/svgs/cognition.svg';
import transparency from '../../src/assets/images/svgs/transparency-layers.svg';
import sensorOccupied from '../../src/assets/images/svgs/sensor-occupied.svg';
import savings from '../../src/assets/images/svgs/savings.svg';
import estate from '../../src/assets/images/svgs/estate.svg';
import heartArrow from '../../src/assets/images/svgs/heart-arrow.svg';
import workload from '../../src/assets/images/svgs/assured-workload.svg';
import moneyBag from '../../src/assets/images/svgs/money-bag.svg';
import insurance from '../../src/assets/images/svgs/insurance.svg';
import trustWills from '../../src/assets/images/svgs/trust-wills.svg';
import percent from '../../src/assets/images/svgs/percent.svg';
import budgeting from '../../src/assets/images/svgs/budgeting.svg';
import IntegrationsIcon from '../../src/assets/images/svgs/seamless-integration.svg';
import MagnifiIcon from '../../src/assets/images/svgs/magnifi.svg';
import TifinIcon from '../../src/assets/images/svgs/tifin.svg';
import ConnectiveIcon from '../../src/assets/images/svgs/connective-tech.svg';
import debtImage from '../assets/images/pngs/coach1.png';
import startingImage from '../assets/images/pngs/coach2.png';
import growingImage from '../assets/images/pngs/coach3.png';
import happyGirl from '../assets/images/pngs/happy-girl.png';
import handShake from '../assets/images/pngs/handshake.png';
import piggyBank from '../assets/images/pngs/piggy-bank.png';
import coach4 from '../assets/images/pngs/coach4.png';
import coach5 from '../assets/images/pngs/coach5.png';
import coach6 from '../assets/images/pngs/coach6.png';
import coach7 from '../assets/images/pngs/coach7.png';
import coach8 from '../assets/images/pngs/coach8.png';

export const HEADER_TITLE = 'Feel good about your money.';

export const HEADER_DESCRIPTION =
    "We believe money should bring peace of mind, not pressure. That's why we combine coaching, caring advice, and supportive tools to create a plan that fits your life, helping you feel confident and in control at every step.";

export const FOUNDER = 'ian & andrew, co-founder';

export const FEATURED_ON_TEXT = 'AS FEATURED ON';

export const BUTTON_TEXTS = {
    startJourney: 'Start your Journey',
    scheduleCall: 'Schedule a Call',
    expertiseDecision: '30+ yrs of expertise, behind every decision',
    financialGym: 'FINANCIAL GYM : Trusted by 15,000+ people',
};

export const DEFAULT_RATING_DATA = [
    {
        icon: peopleIcon,
        value: '15,000+',
        label: 'People Coached',
    },
    {
        icon: walletIcon,
        value: '$40M+',
        label: 'Assets Managed',
    },
    {
        icon: locationIcon,
        value: 'Over 44+',
        label: 'States Served',
    },
    {
        icon: starIcon,
        value: '4.9 Star',
        label: 'Average Rating',
    },
];

export const HIGHLIGHT_RATING_DATA = [
    {
        icon: diversityIcon,
        value: '15,000+',
        label: 'People Coached',
    },
    {
        icon: distanceIcon,
        value: 'Over 44+',
        label: 'States Served',
    },
    {
        icon: starsIcon,
        value: '4.9 Star',
        label: 'Average Rating',
    },
];

export const CARD_CONTENT = {
    subtitle: 'WE ARE WHERE YOU ARE',
    title: {
        line1: 'Wherever you are,',
        line2: "that's where we start.",
    },
    description: {
        line1: "Money journeys don't follow one path. We",
        line2: 'meet you at your stage and guide you',
        line3: 'forward, step by step:',
    },
    buttons: [
        {
            id: 1,
            text: 'I am looking for a coach',
            link: '#',
        },
        {
            id: 2,
            text: 'I am looking for an advisor',
            link: '#',
        },
    ],
    stages: [
        { id: 1, label: 'IN DEBT', active: false },
        { id: 2, label: 'STARTING OUT', active: true },
        { id: 3, label: 'GROWING STEADILY', active: false },
        { id: 4, label: 'ALREADY THRIVING', active: false },
    ],
    cards: [
        {
            id: 1,
            image: debtImage,
            alt: 'Person in debt',
            title: 'In Debt?',
            bgColor: '#f5f0e8',
            description: {
                line1: "We'll help you find calm and build a clear,",
                line2: 'judgment-free plan to take back control.',
            },
        },
        {
            id: 2,
            image: startingImage,
            alt: 'Person starting out',
            title: 'Starting Out?',
            bgColor: '#D9D9D9',
            description: {
                line1: "We'll guide you in building healthy habits,",
                line2: 'budgeting, saving, and investing from your',
                line3: 'very first paycheck.',
            },
        },
        {
            id: 3,
            image: growingImage,
            alt: 'Person growing steadily',
            title: 'Growing Steadily?',
            bgColor: '#f5f0e8',
            description: {
                line1: "We'll support you in thriving",
                line2: 'and investing with care.',
            },
        },
        {
            id: 1,
            image: debtImage,
            alt: 'Person in debt',
            title: 'In Debt?',
            bgColor: '#D9D9D9',
            description: {
                line1: "We'll help you find calm and build a clear,",
                line2: 'judgment-free plan to take back control.',
            },
        },
        {
            id: 2,
            image: startingImage,
            alt: 'Person starting out',
            title: 'Starting Out?',
            bgColor: '#f5f0e8',
            description: {
                line1: "We'll guide you in building healthy habits,",
                line2: 'budgeting, saving, and investing from your',
                line3: 'very first paycheck.',
            },
        },
        {
            id: 3,
            image: growingImage,
            alt: 'Person growing steadily',
            title: 'Growing Steadily?',
            bgColor: '#D9D9D9',
            description: {
                line1: "We'll support you in thriving",
                line2: 'and investing with care.',
            },
        },
    ],
};

export const REVEAL_TEXT = {
    prefix: 'At Connective, we believe',
    highlight: 'money should feel',
    body: "empowering, not overwhelming. That's why we combine empathy, expertise, and thoughtful guidance to help you feel good about your financial journey. Our success isn't measured by assets alone, but by the lives and families we positively impact.",
    founder: 'ian & andrew, co-founder',
};

export const GROWTH_SECTION_DATA = {
    coaching: {
        category: 'COACHING',
        title: 'Money habits, made easy for you',
        description:
            "As Connective's coaching arm, Financial Gym is your caring guide for money. Whether it's learning to budget, paying off debt, or finally building a savings routine, our coaches work with you one-on-one to build healthy habits, always with encouragement, never with judgment.",
        cta: 'FINANCIAL GYM : Trusted by 15,000+ people',
        icon: 'coaching-icon.svg',
    },
    advisory: {
        category: 'ADVISORY',
        title: 'Grow wealth with confidence',
        description:
            "Your wealth should move in step with your life. Whether it's your first investment, planning for family, or building long-term security, our advisors create clear, transparent strategies designed to protect and grow what matters most to you.",
        cta: '30+ yrs of expertise, behind every decision',
        icon: 'advisory-icon.svg',
    },
};

export const TESTIMONIAL_DATA = {
    title: '15,000+ journeys. One result: Financial wellbeing.',
    subtitle:
        'From paying off debt to growing wealth, people just like you have transformed their money stories with Connective. Their journeys prove one thing: wherever you begin, a healthier, more confident relationship with money is always possible.',
    testimonials: [
        { name: 'John doe', role: 'Software engineer' },
        { name: 'John doe', role: 'Software engineer' },
        { name: 'John doe', role: 'Software engineer' },
        { name: 'John doe', role: 'Software engineer' },
        { name: 'John doe', role: 'Software engineer' },
        { name: 'John doe', role: 'Software engineer' },
        { name: 'John doe', role: 'Software engineer' },
        { name: 'John doe', role: 'Software engineer' },
        { name: 'John doe', role: 'Software engineer' },
        { name: 'John doe', role: 'Software engineer' },
        { name: 'John doe', role: 'Software engineer' },
        { name: 'John doe', role: 'Software engineer' },
    ],
};

export const FAQ_DATA = [
    {
        id: 1,
        question: 'What is Connective?',
        answer: "Finance doesn't need to feel overwhelming. Our blogs breaks it down with practical tips, fresh perspectives, and real stories, so you can make better money choices with confidence, not jargon.",
    },
    {
        id: 2,
        question: 'What is financial coaching?',
        answer: "Finance doesn't need to feel overwhelming. Our blogs breaks it down with practical tips, fresh perspectives, and real stories, so you can make better money choices with confidence, not jargon.",
    },
    {
        id: 3,
        question: 'What makes your trainers qualified to give financial advice?',
        answer: "Finance doesn't need to feel overwhelming. Our blogs breaks it down with practical tips, fresh perspectives, and real stories, so you can make better money choices with confidence, not jargon.",
    },
    {
        id: 4,
        question: 'How does coaching work at Connective?',
        answer: "Finance doesn't need to feel overwhelming. Our blogs breaks it down with practical tips, fresh perspectives, and real stories, so you can make better money choices with confidence, not jargon.",
    },
    {
        id: 5,
        question: 'How does advising work at Connective?',
        answer: "Finance doesn't need to feel overwhelming. Our blogs breaks it down with practical tips, fresh perspectives, and real stories, so you can make better money choices with confidence, not jargon.",
    },
    {
        id: 6,
        question: 'Do you work with people who are struggling financially?',
        answer: "Finance doesn't need to feel overwhelming. Our blogs breaks it down with practical tips, fresh perspectives, and real stories, so you can make better money choices with confidence, not jargon.",
    },
];

export const INSIGHTS_DATA = {
    sectionTitle: 'INSIGHTS SECTION',
    mainHeading: 'Money, made simple.',
    description:
        "Finance doesn't need to feel overwhelming. Our blogs breaks it down with practical tips, fresh perspectives, and real stories, so you can make better money choices with confidence, not jargon.",
    readMoreText: 'Read more',
    cards: [
        {
            id: 1,
            category: 'MONEY BASICSS',
            title: 'Five Small Money Wins That Boost Confidence Fast',
            author: 'Author name',
            image: happyGirl,
        },
        {
            id: 2,
            category: 'DEBT, SAVINGS & CHOICES',
            title: 'Should You Save or Invest First? A Simple Guide',
            author: 'Author name',
            image: handShake,
        },
        {
            id: 3,
            category: 'LIFE STAGES',
            title: 'How to Manage Finances as a Couple Without the Stress',
            author: 'Author name',
            image: piggyBank,
        },
        {
            id: 4,
            category: 'LIFE STAGES & TRANSITIONS',
            title: 'The Right Time to Talk to Your Kids About Money',
            author: 'Author name',
            image: happyGirl,
        },
        {
            id: 5,
            category: 'MONEY BASICSS',
            title: 'Five Small Money Wins That Boost Confidence Fast',
            author: 'Author name',
            image: happyGirl,
        },
        {
            id: 6,
            category: 'DEBT, SAVINGS & CHOICES',
            title: 'Should You Save or Invest First? A Simple Guide',
            author: 'Author name',
            image: handShake,
        },
        {
            id: 7,
            category: 'LIFE STAGES',
            title: 'How to Manage Finances as a Couple Without the Stress',
            author: 'Author name',
            image: piggyBank,
        },
        {
            id: 8,
            category: 'LIFE STAGES & TRANSITIONS',
            title: 'The Right Time to Talk to Your Kids About Money',
            author: 'Author name',
            image: happyGirl,
        },
    ],
};

export const CTA_CONTENT = {
    form: {
        heading: 'Ready to get started?',
        description:
            "Your journey to feeling good about money begins with a simple step. We'll walk with you from the very first conversation.",
        buttonText: 'Schedule a Call',
        fields: [
            {
                name: 'fullName',
                type: 'text',
                placeholder: 'Full name',
                required: true,
            },
            {
                name: 'phoneNumber',
                type: 'tel',
                placeholder: 'Phone number',
                required: true,
            },
            {
                name: 'email',
                type: 'email',
                placeholder: 'Email ID',
                required: true,
            },
            {
                name: 'preferredTime',
                type: 'text',
                placeholder: 'Preferred time to connect',
                required: false,
            },
            {
                name: 'houseAddress',
                type: 'text',
                placeholder: 'House Address (optional)',
                required: false,
            },
            {
                name: 'postalCode',
                type: 'text',
                placeholder: 'Postal Code (optional)',
                required: false,
            },
        ],
    },

    consultation: {
        heading: 'Your first step starts here',
        description:
            "It's not about being perfect with money, it's about taking the first step toward clarity. Let's walk it together.",
        buttonText: 'Schedule a free consultation',
    },

    member: {
        heading: 'Want to learn more about becoming a member?',
        buttonText: 'YES, PLEASE!',
    },

    memberAlt: {
        heading: 'Want to learn more about becoming a member?',
        buttonText: 'YES, PLEASE!',
    },
};

export const quotes = [
    {
        text: 'I learn more than fixed deposits, with real assets backing it.',
        description: 'with real assets backing it. Nisha M.',
        content: 'I learn more than fixed deposits, with real assets backing it.Nisha M.',
    },
];

export const quotes2 = [
    {
        text: 'Clarity • Confidence • Supportive Technology • Human-Centered AI • Personalization • Adaptability • Transparency • Seamless Experience • Integrated dashboards • Secure client portal',
        description:
            '• AI-driven insights • Risk visibility • Portfolio analytics • Goal alignment • Dynamic planning tools • Real-time adjustments • Personalized recommendations • End-to-end reporting • Tech + Human synergy',
        content:
            ' • Complexity made simple • Adaptive strategies • Values-based investing • Guided by empathy • Growth with care • Life-stage planning • Always evolving • Peace of mind through data',
    },
];

export const CONTACT_INFO = {
    phone: '(646) 609-2225',
    email: 'info@fingyms.com',
    address: '205 Hudson St. Floor 8 New York City, NY 10013',
};

export const LEGAL_LINKS = [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Disclosure', href: '#' },
    { label: 'Library', href: '#' },
    { label: 'Client Relationship', href: '#' },
    { label: 'Summary', href: '#' },
];

export const SOCIAL_LINKS_CONFIG = [
    { iconName: 'facebook', href: '#', ariaLabel: 'Facebook' },
    { iconName: 'linkedIn', href: '#', ariaLabel: 'LinkedIn' },
    { iconName: 'instagram', href: '#', ariaLabel: 'Instagram' },
    { iconName: 'callFooter', href: '#', ariaLabel: 'Phone' },
    { iconName: 'mailFooter', href: '#', ariaLabel: 'Email' },
];

export const FOOTER_TEXT = {
    newsletter: {
        label: 'GET THE BEST FROM THE CONNECTIVE COMMUNITY',
        placeholder: 'Email Address',
        submitAlt: 'Submit',
    },
    contact: {
        title: 'CONTACT US',
    },
    legal: {
        title: 'LEGAL',
    },
    disclaimer: {
        paragraph1:
            'The Financial Gym is a division of Connective Wealth Partners LLC, a registered investment adviser offering advisory services in the United States. Registration does not imply any specific level of skill or training.',
        paragraph2:
            'Connective Wealth Partners, LLC ("CWP") is a Registered Investment Advisor ("RIA"), located in the State of New York. CWP provides investment advisory and related services for clients nationwide. CWP and its representatives are in compliance with the current notice filing and licensing requirements imposed upon registered investment advisers by those states in which CWP maintains clients. CWP may only transact business in those states in which it is notice filed, or qualifies for an exemption or exclusion from notice filing requirements.',
        paragraph3:
            'The information on this website is for informational purposes only and should not be considered investment advice or a recommendation to buy or sell securities. All investments involve risks and may lead to loss. Past performance is not indicative of future results.',
        paragraph4:
            'Connective Wealth Partners only operates in jurisdictions where it is properly registered or exempt from registration requirements. For more details about our firm, including services offered, fees, and a summary of our ADV Part 2A, available upon request or through the SEC`s Investment Adviser Public Disclosure website at www.adviserinfo.sec.gov. For all disclosures, visit www.financialgym.com/disclosure-library.',
        paragraph5:
            'For more information about our services and fees, please refer to our Form ADV Part 2A, which is available upon request or through the SEC`s Investment Adviser Public Disclosure website at www.adviserinfo.sec.gov or www.financialgym.com/disclosure-library.',
        copyright:
            '© {year} © 2025 Connective Wealth Partners LLC, doing business as The Financial Gym. All rights reserved.',
    },
};

export const features = [
    {
        icon: partnerExchange,
        title: 'Personal Guidance',
        description: 'One-on-one coaching shaped around your life, your goals, and your pace.',
    },
    {
        icon: shieldWithHeart,
        title: 'Non-Judgmental',
        description: 'No shame, no blame, just encouragement and care.',
    },
    {
        icon: tableChart,
        title: 'Habit First',
        description: 'We focus on building steady, healthy behaviors, not quick fixes.',
    },
    {
        icon: personSearch,
        title: 'Accountability Partner',
        description: 'We walk beside you, offering support and reassurance at every step.',
    },
    {
        icon: provenAtScale,
        title: 'Proven at Scale',
        description: '15,000+ people coached, each journey cared for as unique.',
    },
];

export const COACHES_DATA = {
    title: 'The people behind the progress.',
    subtitle:
        "Our coaches aren't here to judge or lecture, they're here to listen, encourage, and guide you with care. Real people, real expertise, and real support at every step.",
    coaches: [
        {
            id: 1,
            name: 'Triana Williams',
            role: 'Financial coach',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex turpis malesuada, dictu m est id, mattis tellus. Sed dignissim.',
            image: coach4,
            company: 'Johnhoe',
        },
        {
            id: 2,
            name: 'Kadri Augustin',
            role: 'Financial coach',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex turpis malesuada, dictu m est id, mattis tellus. Sed dignissim.',
            image: coach5,
            company: 'Johnhoe',
        },
        {
            id: 3,
            name: 'Erika Moromisato',
            role: 'Financial coach',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex turpis malesuada, dictu m est id, mattis tellus. Sed dignissim.',
            image: coach6,
            company: 'Johnhoe',
        },
        {
            id: 4,
            name: 'Garrett Faulconer',
            role: 'Financial coach',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex turpis malesuada, dictu m est id, mattis tellus. Sed dignissim.',
            image: coach7,
            company: 'Johnhoe',
        },
        {
            id: 5,
            name: 'Kylie Lipinski',
            role: 'Financial coach',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex turpis malesuada, dictu m est id, mattis tellus. Sed dignissim.',
            image: coach8,
            company: 'Johnhoe',
        },
    ],
};

export const stories = [
    {
        title: 'From anxiety to clarity',
        text: 'I used to dread checking my bank account because it always brought stress and worry. Working with a Connective coach helped me see my spending patterns and create a simple, realistic budget. Now I feel in control, my debt is shrinking, and I actually look forward to checking in for the latest updates or coaching tip.',
        name: 'Sarah L.',
        role: 'Marketing Manager',
    },
    {
        title: 'Building habits that last',
        text: "Saving money felt impossible for me, no matter how much I earned. My coach broke it down into small, achievable steps and celebrated every win along the way. Today I not only have an emergency fund, but I'm also saving for my dream vacation — all without feeling restricted or overwhelmed.",
        name: 'Michael S.',
        role: 'Financial Analyst',
    },
    {
        title: 'Stronger together as a couple',
        text: 'My partner and I used to argue whenever the topic of money came up. Connective gave us a safe space and the tools to finally get on the same page. We now share a clear plan for our goals, from buying a home to building long-term savings, and our relationship feels tighter and stronger because of it.',
        name: 'Fatima H.',
        role: 'Nonprofit Program Director',
    },
    {
        title: 'Building habits that last',
        text: "Saving money felt impossible for me, no matter how much I earned. My coach broke it down into small, achievable steps and celebrated every win along the way. Today I not only have an emergency fund, but I'm also saving for my dream vacation — all without feeling restricted or overwhelmed.",
        name: 'Michael S.',
        role: 'Financial Analyst',
    },
    {
        title: 'Stronger together as a couple',
        text: 'My partner and I used to argue whenever the topic of money came up. Connective gave us a safe space and the tools to finally get on the same page. We now share a clear plan for our goals, from buying a home to building long-term savings, and our relationship feels tighter and stronger because of it.',
        name: 'Fatima H.',
        role: 'Nonprofit Program Director',
    },
    {
        title: 'From anxiety to clarity',
        text: 'I used to dread checking my bank account because it always brought stress and worry. Working with a Connective coach helped me see my spending patterns and create a simple, realistic budget. Now I feel in control, my debt is shrinking, and I actually look forward to checking in for the latest updates or coaching tip.',
        name: 'Sarah L.',
        role: 'Marketing Manager',
    },
];

export const ourPrinciples = [
    {
        icon: sensorOccupied,
        title: 'Personalized Strategy',
        description:
            'Your financial situation is unique and should be too. We design around your goals, so every step feels like it truly fits you.',
    },
    {
        icon: cognition,
        title: 'Human Expertise',
        description:
            'Technology is powerful, but nothing can replace the connection of working with real financial listeners. Our advisors bring empathy and clarity to help you be in control.',
    },
    {
        icon: transparency,
        title: 'Transparency Always',
        description:
            'No fine print. No unexpected fees. Our guidance is clear, open, and free from hidden agendas.',
    },
    {
        icon: cognition,
        title: 'Smarter with Tech',
        description:
            'We use innovative tools to make complex work simpler. Our tools simplify decisions so you can move forward with confidence.',
    },
    {
        icon: sensorOccupied,
        title: 'Personalized Strategy',
        description:
            'Your financial situation is unique and should be too. We design around your goals, so every step feels like it truly fits you.',
    },
    {
        icon: cognition,
        title: 'Human Expertise',
        description:
            'Technology is powerful, but nothing can replace the connection of working with real financial listeners. Our advisors bring empathy and clarity to help you be in control.',
    },
    {
        icon: transparency,
        title: 'Transparency Always',
        description:
            'No fine print. No unexpected fees. Our guidance is clear, open, and free from hidden agendas.',
    },
    {
        icon: cognition,
        title: 'Smarter with Tech',
        description:
            'We use innovative tools to make complex work simpler. Our tools simplify decisions so you can move forward with confidence.',
    },
    {
        icon: sensorOccupied,
        title: 'Personalized Strategy',
        description:
            'Your financial situation is unique and should be too. We design around your goals, so every step feels like it truly fits you.',
    },
    {
        icon: cognition,
        title: 'Human Expertise',
        description:
            'Technology is powerful, but nothing can replace the connection of working with real financial listeners. Our advisors bring empathy and clarity to help you be in control.',
    },
    {
        icon: transparency,
        title: 'Transparency Always',
        description:
            'No fine print. No unexpected fees. Our guidance is clear, open, and free from hidden agendas.',
    },
    {
        icon: cognition,
        title: 'Smarter with Tech',
        description:
            'We use innovative tools to make complex work simpler. Our tools simplify decisions so you can move forward with confidence.',
    },
];

export const services = [
    {
        id: '401k',
        icon: savings,
        title: '401K/RA Management',
        description:
            "We'll help you optimize your retirement savings, making sure your investments align with your goals and life stage.",
        color: '#00BCD4',
    },
    {
        id: 'estate',
        icon: estate,
        title: 'Estate Planning',
        description:
            "We'll help you optimize your retirement savings, making sure your investments align with your goals and life stage.",
        color: '#00BCD4',
    },
    {
        id: 'debt',
        icon: workload,
        title: 'Debt mitigation',
        description:
            "We'll help you optimize your retirement savings, making sure your investments align with your goals and life stage.",
        color: '#00BCD4',
    },
    {
        id: 'loans',
        icon: moneyBag,
        title: 'Personal Loans',
        description:
            "We'll help you optimize your retirement savings, making sure your investments align with your goals and life stage.",
        color: '#00BCD4',
    },
    {
        id: 'healthcare',
        icon: heartArrow,
        title: 'Health Care Advocacy',
        description:
            "We'll help you optimize your retirement savings, making sure your investments align with your goals and life stage.",
        color: '#00BCD4',
    },
    {
        id: 'insurance',
        icon: insurance,
        title: 'Insurance',
        description:
            "We'll help you optimize your retirement savings, making sure your investments align with your goals and life stage.",
        color: '#00BCD4',
    },
    {
        id: 'trusts',
        icon: trustWills,
        title: 'Trust & Wills',
        description:
            "We'll help you optimize your retirement savings, making sure your investments align with your goals and life stage.",
        color: '#00BCD4',
    },
    {
        id: 'taxes',
        icon: percent,
        title: 'Taxes',
        description:
            "We'll help you optimize your retirement savings, making sure your investments align with your goals and life stage.",
        color: '#00BCD4',
    },
    {
        id: 'budgeting',
        icon: budgeting,
        title: 'Budgeting',
        description:
            "We'll help you optimize your retirement savings, making sure your investments align with your goals and life stage.",
        color: '#00BCD4',
    },
];

export const technologyPartners = [
    {
        id: 1,
        name: 'Magnifi',
        icon: MagnifiIcon,
        iconPlaceholder: 'M',
        description: 'Portfolio insights and risk analytics that make the invisible visible.',
        accentColor: '#00BCD4',
    },
    {
        id: 2,
        name: 'Tifin',
        icon: TifinIcon,
        iconPlaceholder: 'TIFIN',
        description: 'AI personalization that aligns investments with your goals and values.',
        accentColor: '#00BCD4',
    },
    {
        id: 3,
        name: 'Connective Tech',
        icon: ConnectiveIcon,
        iconPlaceholder: '⬡',
        description:
            'Proprietary tools that grow with you, from your first job to long-term wealth.',
        accentColor: '#00BCD4',
    },
    {
        id: 4,
        name: 'Seamless Integrations',
        icon: IntegrationsIcon,
        iconPlaceholder: '⚬',
        description: 'Coaching, advisory, and reporting in one connected system.',
        accentColor: '#00BCD4',
    },
];
