// app
import { ILang } from '../../core/index';

export class DesktopConfig {

  public static SUPPORTED_LANGUAGES: Array<ILang> = [
    { code: 'en', flag: 'us', title: 'English' },
    { code: 'es', flag: 'mx', title: 'Spanish' },
    { code: 'fr', flag: 'fr', title: 'French' },
    { code: 'ru', flag: 'ru', title: 'Russian' },
    { code: 'bg', flag: 'bg', title: 'Bulgarian' },

    // angular-seed-advanced-mutuatech
    { code: 'pt', flag: 'br', title: 'Portuguese' },
  ];

}
