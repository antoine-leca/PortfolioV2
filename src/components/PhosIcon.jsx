import { 
  EnvelopeSimpleIcon,
  FileTextIcon,
  GithubLogoIcon,
  HouseIcon,
  LinkedinLogoIcon,
  ListIcon,
  XIcon,
  SwatchesIcon,
  ArrowDownIcon,
  SunIcon,
  MoonIcon,
  CheckFatIcon,
} from '@phosphor-icons/react';

const phos = {
  List: ListIcon,
  Envelope: EnvelopeSimpleIcon,
  Linkedin: LinkedinLogoIcon,
  Github: GithubLogoIcon,
  Doc: FileTextIcon,
  Home: HouseIcon,
  Cross: XIcon,
  Themes:SwatchesIcon,
  ArrowDown: ArrowDownIcon,
  Sun: SunIcon,
  Moon: MoonIcon,
  Check: CheckFatIcon,
};

// Icons component ready to use in pages 
const PhosIcon = ({ name, size = 32, ...props }) => {
  const Icon = phos[name];
  if (!Icon) return null;
  return <Icon size={size} {...props} />;
};

export default PhosIcon;