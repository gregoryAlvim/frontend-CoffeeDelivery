import { IconProps, Icon} from 'phosphor-react';
import { STATUS_COLORS, TextWithIconContainer } from './styles';

interface TextWithIconProps extends IconProps {
   icon: Icon;
   description: string;
   backgroundColor: keyof typeof STATUS_COLORS;
}

export function TextWithIcon({ icon: IconComponent, description, backgroundColor, ...iconProps }: TextWithIconProps) {
   
   return (
      <TextWithIconContainer bgIconColor={backgroundColor}>
         <IconComponent className='iconComponente' {...iconProps}/>
         <p>{description}</p>
      </ TextWithIconContainer>
   );
}