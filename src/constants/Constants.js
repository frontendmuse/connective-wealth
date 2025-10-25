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
import supervisorAccount from '../../src/assets/images/svgs/supervisor-account.svg';
import delegation from '../../src/assets/images/svgs/approval-delegation.svg';
import framePerson from '../../src/assets/images/svgs/frame-person.svg';
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
import coach9 from '../assets/images/pngs/coach9.png';
import coach10 from '../assets/images/pngs/coach10.png';

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

export const ABOUT_US_DATA = {
    mainHeading: "Money isn't just numbers. It's personal.",
    subHeading:
        "At Connective, we believe financial freedom comes from confidence, clarity, and consistency, not quick fixes. That's why we combine human coaching, smart technology, and real empathy to help people at every stage of their money journey.",
    ctaButton: 'Schedule a Call',

    mission: {
        preText: 'Two founders. One mission:',
        mainText: 'make money human.',
        description:
            'Connective was built on a simple idea, financial guidance should be personal, approachable, and free of judgment.',
    },

    founders: [
        {
            name: 'Andrew Nigrelli',
            description:
                'After years in financial services, Andrew saw how traditional wealth management left people behind. He brings expertise in financial planning and behavioral change, making care the heart of every client relationship.',
        },
        {
            name: 'Ian Rosen',
            description:
                "Coming from technology and digital innovation, Ian knows how to make complex systems simple. He leads Connective's focus on human-first technology, HumAIn, that empowers, not overwhelms.",
        },
    ],

    closingText:
        'Together, they built Connective to blend empathy, expertise, and innovation into one promise, to make you feel good about your money.',
};

export const TECH_POWERED_DATA = {
    mainHeading: 'Tech-powered. Human-first.',
    subHeading:
        "We're not just another financial app and we're not a traditional advisory firm. Connective is a tech-enabled coaching and advisory platform built to empower people, not overwhelm them. Our philosophy rests on three pillars:",
    pillars: [
        {
            id: 1,
            title: 'Coaching with Care',
            description:
                'We help you build healthy habits, budgeting, saving, and planning with personal guidance that meets you where you are. Every session is about clarity, confidence, and real progress.',
            icon: supervisorAccount,
        },
        {
            id: 2,
            title: 'Wealth Management',
            description:
                'With HumAIn, our proprietary system that blends Human + AI + Insight, we design, track, and adapt wealth plans in real time. It gives advisors sharper tools and clients clearer, faster results.',
            icon: delegation,
        },
        {
            id: 3,
            title: 'Human-First Difference',
            description:
                'Technology powers us, but people define us. Every plan, product, and partnership at Connective is built around empathy, trust, and human connection.',
            icon: framePerson,
        },
    ],
    footerText:
        "At the heart of this is HumAIn, our proprietary system that brings Human + AI + Insight together. It blends intelligent technology with human understanding, giving our coaches and advisors the tools to deliver care that's personalized, scalable, and deeply human.",
};

export const TEAM_DATA = {
    heading: 'The people shaping Connective',
    subheading:
        'Our leadership team blends experience across finance, technology, design, and consumer brands. Together, they ensure Connective stays true to its mission: making money approachable, actionable, and achievable for everyone.',
    members: [
        {
            id: 1,
            name: 'Ian',
            position: 'Position',
            description:
                'Forcm ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringit',
            image: coach9,
        },
        {
            id: 2,
            name: 'Andrew',
            position: 'Position',
            description:
                'Forcm ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringit',
            image: coach10,
        },
        {
            id: 3,
            name: 'Taylor',
            position: 'Position',
            description:
                'Forcm ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringit',
            image: coach7,
        },
    ],
};

export const TEAM_COACHES_DATA = [
    {
        name: 'Bigby',
        position: 'Position',
        image: growingImage,
    },
    {
        name: 'Catriona Williams',
        position: 'Position',
        image: debtImage,
    },
    {
        name: 'Kadri Augustin',
        position: 'Position',
        image: startingImage,
    },
    {
        name: 'Erika Moromisato',
        position: 'Position',
        image: coach4,
    },
    {
        name: ' Kadri Augustin',
        position: 'Position',
        image: coach5,
    },
    {
        name: 'Kylie Lipinski',
        position: 'Position',
        image: coach6,
    },
    {
        name: 'Garrett Faulconer ',
        position: 'Position',
        image: coach7,
    },
    {
        name: 'Tina Hang',
        position: 'Position',
        image: coach8,
    },
    {
        name: 'Ian',
        position: 'Position',
        image: coach9,
    },
    {
        name: 'Andrew',
        position: 'Position',
        image: coach10,
    },
    {
        name: 'Bigby',
        position: 'Position',
        image: growingImage,
    },
    {
        name: 'Catriona Williams',
        position: 'Position',
        image: debtImage,
    },
    {
        name: 'Kadri Augustin',
        position: 'Position',
        image: startingImage,
    },
];

export const NORTH_STAR_DATA = {
    heading: 'OUR NORTH STAR',
    description:
        "At Connective, we believe money should bring comfort, not pressure. Everyone deserves to feel confident and cared for, no matter where they are in life. That's why we combine empathy, expertise, and technology that supports, not overwhelms, to help you build trust, clarity, and lasting confidence with your money.",
};

export const FINANCIAL_FREEDOM_DATA = {
    title: "Financial freedom isn't built alone.",
    paragraph1:
        "We know financial freedom can't be built in silos. That's why we partner with leading technology platforms, data providers, and innovation labs to continually strengthen the core we give our clients. Rather than piling on tools, we thoughtfully curate an ecosystem integrating with trusted partners like Magnifi and Tifin, while also developing proprietary Connective technology to ensure every member has access to solutions that are simple, relevant, and empowering.",
    paragraph2:
        "For us, partnerships aren't just integrations. They're genuine collaborations that make financial coaching more personal, more scalable, and ultimately, more impactful for every individual and family we serve.",
};

export const CONTACT_FORM_DATA = {
    title: "Your journey matters, we're here whenever you need us",
    description:
        'Whether you have a question, need guidance, or just want to talk about your money journey, reach out anytime. A caring member of our team will get back to you soon.',
    fields: {
        fullName: 'Full name',
        phoneNumber: 'Phone number',
        emailId: 'Email ID',
        preferredTime: 'Preferred time to connect',
        preferredDay: 'Preferred day to connect',
        yourMessage: 'Your message',
    },
    buttonText: 'SCHEDULE A CALL',
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

export const CONTACT_FAQ_DATA = [
    {
        id: 1,
        section: 'In general',
        questions: [
            {
                id: '1-1',
                question: 'What services do you offer?',
                answer: 'We offer comprehensive financial services including coaching, advisory, and technology solutions.',
            },
            {
                id: '1-2',
                question: 'How do I sign up?',
                answer: 'You can sign up through our website or mobile app in just a few minutes.',
            },
        ],
    },
    {
        id: 2,
        section: 'Coaching',
        questions: [
            {
                id: '2-1',
                question: 'What is financial coaching?',
                answer: 'Financial coaching is a personalized service that helps you develop better money management skills and achieve your financial goals.',
            },
            {
                id: '2-2',
                question: 'How do I get matched with a coach?',
                answer: 'Our matching system pairs you with a coach based on your financial goals, preferences, and availability.',
            },
            {
                id: '2-3',
                question: 'Do I need to know a lot about money before starting coaching?',
                answer: 'No prior knowledge is required. Our coaches work with people at all levels of financial literacy.',
            },
            {
                id: '2-4',
                question: 'How often will I meet with my coach?',
                answer: 'Meeting frequency varies based on your needs, typically ranging from weekly to monthly sessions.',
            },
            {
                id: '2-5',
                question: 'Can I switch coaches if I want to?',
                answer: 'Yes, you can request a coach change at any time to ensure the best fit for your needs.',
            },
        ],
    },
    {
        id: 3,
        section: 'Advisory',
        questions: [
            {
                id: '3-1',
                question: 'What is financial advisory?',
                answer: 'Financial advisory provides expert guidance on investments, retirement planning, and wealth management.',
            },
            {
                id: '3-2',
                question: 'How is advisory different from coaching?',
                answer: 'Advisory focuses on investment strategies and wealth management, while coaching helps with day-to-day money habits.',
            },
        ],
    },
    {
        id: 4,
        section: 'Technology & Access',
        questions: [
            {
                id: '4-1',
                question: 'What platforms do you support?',
                answer: 'Our services are available on web, iOS, and Android platforms.',
            },
            {
                id: '4-2',
                question: 'Is there a mobile app?',
                answer: 'Yes, we have mobile apps available for both iOS and Android devices.',
            },
        ],
    },
    {
        id: 5,
        section: 'Getting Started',
        questions: [
            {
                id: '5-1',
                question: 'How do I begin?',
                answer: 'Simply create an account and complete our brief onboarding questionnaire.',
            },
            {
                id: '5-2',
                question: 'Is there a free trial?',
                answer: 'Yes, we offer a 14-day free trial for all new users.',
            },
        ],
    },
];

export const CONTACT_INFO_DATA = {
    phone: '(646) 609-2225',
    address: '205 Hudson St, Floor 8 New York City, NY 10013',
    email: 'info@connective.com',
};

export const SPA_INFO = {
    name: 'Sisley Spa at The Dominick',
    specialOffer: '60 Min Spa Special',
    price: '$169',
    location: 'Spa in NYC',
    floor: 'floor 8',
};

export const contactTestimonialData = {
    trustText: 'Trusted by over 15,000+ people',
    testimonials: [
        {
            text: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia...',
            author: 'John Doe, Software Engineer',
        },
        {
            text: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia...',
            author: 'John Doe, Software Engineer',
        },
        {
            text: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia...',
            author: 'John Doe, Software Engineer',
        },
        {
            text: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia...',
            author: 'John Doe, Software Engineer',
        },
        {
            text: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia...',
            author: 'John Doe, Software Engineer',
        },
        {
            text: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia...',
            author: 'John Doe, Software Engineer',
        },
        {
            text: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia...',
            author: 'John Doe, Software Engineer',
        },
        {
            text: 'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia...',
            author: 'John Doe, Software Engineer',
        },
    ],
};
