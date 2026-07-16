// Skills grouped into categories.
//
// Instead of arbitrary percentages, each skill has a `tier`:
//   'core'       — I use this daily / can lead with it
//   'proficient' — comfortable and productive
//   'familiar'   — working knowledge, have shipped with it
// This is honest signalling recruiters trust more than "90%" bars.
//
// Icon names are resolved in utils/iconMap.js (with a safe fallback).
// Categories were adapted to your actual (Python-backend) skillset.

export const TIERS = {
  core: { label: 'Core', color: 'bg-accent-500' },
  proficient: { label: 'Proficient', color: 'bg-brand-500' },
  familiar: { label: 'Familiar', color: 'bg-slate-400' },
};

export const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'FaCode',
    skills: [
      { name: 'Python', tier: 'core', icon: 'SiPython' },
      { name: 'SQL', tier: 'core', icon: 'TbSql' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: 'FaServer',
    skills: [
      { name: 'FastAPI', tier: 'core', icon: 'SiFastapi' },
      { name: 'REST APIs', tier: 'core', icon: 'TbApi' },
      { name: 'Async / Event-Driven', tier: 'proficient', icon: 'FaBolt' },
      { name: 'WebSockets', tier: 'proficient', icon: 'TbPlugConnected' },
      { name: 'Microservices', tier: 'proficient', icon: 'FaCubes' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: 'FaCloud',
    skills: [
      { name: 'AWS (Lambda, API GW, S3, EC2)', tier: 'core', icon: 'FaAws' },
      { name: 'AWS Bedrock / Textract / Cognito', tier: 'proficient', icon: 'FaAws' },
      { name: 'Docker', tier: 'proficient', icon: 'SiDocker' },
      { name: 'CI/CD', tier: 'proficient', icon: 'FaInfinity' },
      { name: 'AWX / Ansible', tier: 'proficient', icon: 'SiAnsible' },
      { name: 'Kubernetes', tier: 'familiar', icon: 'SiKubernetes' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'FaDatabase',
    skills: [
      { name: 'PostgreSQL', tier: 'core', icon: 'SiPostgresql' },
      { name: 'DynamoDB', tier: 'proficient', icon: 'SiAmazondynamodb' },
      { name: 'MongoDB', tier: 'familiar', icon: 'SiMongodb' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & GenAI',
    icon: 'FaBrain',
    skills: [
      { name: 'LangChain', tier: 'proficient', icon: 'SiLangchain' },
      { name: 'LLM Tool-Calling', tier: 'proficient', icon: 'FaRobot' },
      { name: 'AWS Bedrock', tier: 'proficient', icon: 'FaAws' },
      { name: 'RAG', tier: 'familiar', icon: 'FaLayerGroup' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    icon: 'FaTools',
    skills: [
      { name: 'Git', tier: 'core', icon: 'SiGit' },
      { name: 'Postman', tier: 'core', icon: 'SiPostman' },
      { name: 'Linux', tier: 'proficient', icon: 'SiLinux' },
    ],
  },
];

// Soft skills (rendered as chips).
export const softSkills = [
  'Problem Solving',
  'Root-Cause Analysis',
  'Ownership',
  'Production Support / On-Call',
  'Code Review',
  'Cross-Team Collaboration',
  'Clear Communication',
  'Adaptability',
];
