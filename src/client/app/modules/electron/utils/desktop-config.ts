// app
import { ILang } from '../../core/index';

export class DesktopConfig {

  public static GET_SUPPORTED_LANGUAGES(): Array<ILang> {
    return [
      { code: 'en', flag: 'us', title: 'English' },
      { code: 'es', flag: 'mx', title: 'Spanish' },
      { code: 'fr', flag: 'fr', title: 'French' },
      { code: 'ru', flag: 'ru', title: 'Russian' },
      { code: 'bg', flag: 'bg', title: 'Bulgarian' },
      { code: 'pt', flag: 'br', title: 'Portuguese' }
    ];
  }

}
