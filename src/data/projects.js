// All five projects.
//
// To use real screenshots instead of the gradient placeholder:
//   1. Put an image in src/assets/projects/ (e.g. axis.png)
//   2. import axis from '../assets/projects/axis.png'
//   3. set `image: axis` on the project below
// Leaving `image: null` renders an attractive gradient placeholder card.
//
// Replace the `#` in github/demo with real URLs, or set to null to hide the button.

export const projects = [
  {
    id: 'axis-auea',
    title: 'Axis End User Automation (AUEA)',
    org: 'Axis Bank',
    period: '2024 – Present',
    featured: true,
    image: null,
    accent: 'from-indigo-500 to-blue-600',
    short:
      'Enterprise endpoint-automation platform serving 150,000+ users across 6,000+ bank branches.',
    description:
      'FastAPI-based backend services for an enterprise endpoint-automation platform that automates printer management, scanner diagnostics, software deployment, and self-healing operations across a nationwide bank network.',
    role:
      'Backend Engineer — designed and built REST APIs and backend services, optimized PostgreSQL, and integrated the orchestrator with device agents.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'REST APIs', 'SQL', 'SignalR', '.NET Agent', 'SCCM', 'Docker', 'Kubernetes', 'Linux'],
    keyFeatures: [
      'Automated printer onboarding, driver management, and device configuration via PrinterIQ.',
      'REST APIs for printer lifecycle management, device diagnostics, and remote remediation.',
      'Orchestrator integrated with a .NET Windows Agent over API-driven and SignalR-based workflows.',
      'Self-healing remediation reducing manual intervention in endpoint support.',
    ],
    challenges:
      'Achieving real-time communication with thousands of distributed endpoints and reducing issue-resolution time from hours to minutes — solved with SignalR-based workflows, automated diagnostics, and optimized SQL queries.',
    metrics: [
      { label: 'Users served', value: '150,000+' },
      { label: 'Branches', value: '6,000+' },
      { label: 'Auto-resolution', value: '~95%' },
    ],
    github: '#',
    demo: null,
  },
  {
    id: 'laas',
    title: 'LAAS — Infrastructure-as-Code Automation',
    org: 'Axis Bank',
    period: '2024 – Present',
    featured: true,
    image: null,
    accent: 'from-violet-500 to-fuchsia-600',
    short:
      'Event-driven, 6-stage server-provisioning pipeline that turns a multi-day manual runbook into a hands-off workflow.',
    description:
      'A FastAPI callback engine driving an event-driven, 6-stage server-provisioning pipeline (AWX/Ansible + PostgreSQL) across ~8 enterprise systems, with full audit trail and automated reliability safeguards.',
    role:
      'Backend Engineer — owned the intake + callback engine (the pipeline state machine), reliability features, and production support.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'AWX', 'Ansible', 'REST APIs', 'JSONB', 'Advisory Locks', 'Aurora', 'Docker'],
    keyFeatures: [
      'Event-driven pipeline where each AWX webhook callback advances the next stage.',
      'Idempotency + PostgreSQL advisory-lock concurrency control eliminating duplicate provisioning.',
      '3× exponential-backoff retries, 10-minute OAuth token caching, and a 5-minute reconciliation watchdog.',
      'Automated post-build Qualys vulnerability scans with CSV email reporting.',
    ],
    challenges:
      'Making an async, webhook-driven pipeline reliable against duplicate and lost callbacks — solved with idempotency checks, DB advisory locks, and a watchdog that reconciles stalled stages against AWX.',
    metrics: [
      { label: 'Pipeline stages', value: '6' },
      { label: 'Systems automated', value: '~8' },
      { label: 'Duplicate provisioning', value: '0' },
    ],
    github: '#',
    demo: null,
  },
  {
    id: 'acc-voice-ops',
    title: 'ACC Voice Ops — AI Voice & Omnichannel',
    org: 'Applied Cloud Computing',
    period: '2024 – Present',
    featured: true,
    image: null,
    accent: 'from-teal-500 to-emerald-600',
    short:
      'Real-time AI voice contact-center platform bridging Twilio telephony to LLM voice agents (Google Gemini).',
    description:
      'Backend and AI-integration features for a real-time voice contact-center platform that automates banking conversations in English and Hindi, deflecting routine calls and escalating only qualified leads to human agents.',
    role:
      'Backend / AI-Integration Engineer — built the LLM tool layer, real-time voice pipeline, OTP flow, and audit/persistence backend.',
    techStack: ['Node.js', 'TypeScript', 'Fastify', 'WebSockets', 'Google Gemini', 'Twilio', 'REST APIs', 'SSE', 'AWS (DynamoDB, S3, SNS, SES)'],
    keyFeatures: [
      'LLM tool-calling handlers (~30 banking/insurance functions) with OTP-gated account access.',
      'Real-time voice over WebSockets with barge-in interruption handling and mu-law/PCM transcoding.',
      'Omnichannel text pipeline (WhatsApp, email, web chat) reusing the voice tool layer.',
      'Call audit to DynamoDB + recordings to S3 with post-call sentiment/summary enrichment.',
    ],
    challenges:
      'Keeping conversation state consistent during barge-in (caller interrupts the bot) and transcoding telephony audio in real time — solved with history truncation to what was actually heard and a pure-code mu-law/PCM transcoder.',
    metrics: [
      { label: 'AI tools', value: '~30' },
      { label: 'Languages', value: 'EN / HI' },
      { label: 'Channels', value: '4+' },
    ],
    github: '#',
    demo: null,
  },
  {
    id: 'tata-ocr',
    title: 'PDF Data Extraction & Transformation (OCR)',
    org: 'Tata Power',
    period: '2024',
    featured: false,
    image: null,
    accent: 'from-amber-500 to-orange-600',
    short:
      'OCR-based ETL tool to extract, transform, and validate financial data from PDFs using AWS Textract.',
    description:
      'An OCR-based tool that extracts, transforms, and validates financial and operational data from PDF documents using Python, SQL, and AWS services, with a dual-panel UI for user validation.',
    role:
      'Backend Engineer — built the ETL pipeline, validation logic, and REST APIs powering the review UI.',
    techStack: ['Python', 'SQL', 'AWS Textract', 'AWS S3', 'REST APIs', 'Tabula-py'],
    keyFeatures: [
      'Python ETL scripts integrating AWS Textract and Tabula-py for unstructured PDF data.',
      'SQL-based validation checks for consistency, accuracy, and referential integrity.',
      'Dual-panel UI showing the original PDF alongside extracted data for validation.',
      'Export to Excel/CSV with automated upload to AWS S3.',
    ],
    challenges:
      'Supporting many inconsistent document formats reliably — solved with optimized parsing logic plus logging, exception handling, and retry mechanisms for scalable ingestion.',
    metrics: [
      { label: 'Doc formats', value: 'Multiple' },
      { label: 'Pipeline', value: 'ETL' },
    ],
    github: '#',
    demo: null,
  },
  {
    id: 'auxilo-api',
    title: 'API Modernization',
    org: 'Auxilo',
    period: '2024',
    featured: false,
    image: null,
    accent: 'from-rose-500 to-pink-600',
    short:
      'Modernized legacy APIs into a scalable, secure, cloud-native architecture on FastAPI + AWS.',
    description:
      'Re-architected legacy API infrastructure into modular, scalable, cloud-native RESTful services using FastAPI and AWS, with secure authentication and controlled rollout strategies.',
    role:
      'Backend Engineer — designed the modular API architecture, auth/authorization, and serverless deployment.',
    techStack: ['FastAPI', 'Python', 'AWS Lambda', 'AWS API Gateway', 'AWS Cognito', 'REST APIs'],
    keyFeatures: [
      'Modular, scalable RESTful APIs with dynamic routing and user-based access control.',
      'AWS Cognito for secure authentication and role-based authorization.',
      'API versioning and controlled rollout to ensure backward compatibility.',
      'Serverless deployment via AWS Lambda exposed through API Gateway.',
    ],
    challenges:
      'Migrating a legacy system without breaking existing consumers — solved with API versioning and controlled, backward-compatible rollout strategies.',
    metrics: [
      { label: 'Architecture', value: 'Serverless' },
      { label: 'Auth', value: 'Cognito RBAC' },
    ],
    github: '#',
    demo: null,
  },
];
