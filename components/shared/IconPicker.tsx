// import "server-only"

import * as iconAi from 'react-icons/ai';
import * as iconFa from 'react-icons/fa';
import * as iconMdi from 'react-icons/md';
import * as iconHi from 'react-icons/hi';
import * as iconFi from 'react-icons/fi';
import * as iconVsc from 'react-icons/vsc';



type IconPickerProps = {
  provider: string;
  name: string;
  size?: string;
  className?: string;
};

const IconPicker = ({provider, name, size="2rem", className = ""}:
IconPickerProps) => {

      switch (provider) {
        case 'fa':
          const FontAwesomeIcon= iconFa[name]
          return FontAwesomeIcon?<FontAwesomeIcon className={className}/>:null
        case 'mdi':
          const MaterialIcon= iconMdi[name]
          return MaterialIcon?<MaterialIcon className={className}/>:null
        case 'hi':
          const HeroIcon= iconHi[name]
          return HeroIcon?<HeroIcon className={className}/>:null
        case 'fi':
          const FeatherIcon= iconFi[name]
          return FeatherIcon?<FeatherIcon className={className}/>:null
        case 'ai':
          const AntIcon= iconAi[name]
          return AntIcon?<AntIcon className={className}/>:null
        case 'vsc':
          const VSCIcon= iconVsc[name]
          return VSCIcon?<VSCIcon className={className}/>:null
        default:
          return <div></div>;
      }
    }

export default IconPicker