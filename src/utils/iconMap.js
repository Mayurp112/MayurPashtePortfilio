// Central icon registry. Data files reference icons by string name; this maps
// those names to real react-icons components. Any name not found falls back to
// a default icon, so a missing/renamed icon can never break the build.

import {
  FaCode,
  FaServer,
  FaCloud,
  FaDatabase,
  FaBrain,
  FaTools,
  FaBolt,
  FaCubes,
  FaAws,
  FaInfinity,
  FaRobot,
  FaLayerGroup,
  FaLink,
  FaPlug,
  FaNetworkWired,
} from 'react-icons/fa';
import {
  SiPython,
  SiFastapi,
  SiDocker,
  SiKubernetes,
  SiAnsible,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiPostman,
  SiLinux,
} from 'react-icons/si';

export const ICONS = {
  // Category icons
  FaCode,
  FaServer,
  FaCloud,
  FaDatabase,
  FaBrain,
  FaTools,
  // Skill icons
  SiPython,
  SiFastapi,
  TbApi: FaNetworkWired,
  TbPlugConnected: FaPlug,
  TbSql: FaDatabase,
  FaBolt,
  FaCubes,
  FaAws,
  SiDocker,
  SiKubernetes,
  FaInfinity,
  SiAnsible,
  SiPostgresql,
  SiAmazondynamodb: FaDatabase,
  SiMongodb,
  SiLangchain: FaLink,
  FaRobot,
  FaLayerGroup,
  SiGit,
  SiPostman,
  SiLinux,
};

const DEFAULT_ICON = FaCode;

/** Resolve an icon component by name, with a safe fallback. */
export function getIcon(name) {
  return ICONS[name] || DEFAULT_ICON;
}
