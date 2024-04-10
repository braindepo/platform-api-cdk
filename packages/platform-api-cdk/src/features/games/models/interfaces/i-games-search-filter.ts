import { ITranslationsFilter } from '../../../../shared/translations';

export interface IGamesSearchFilter extends ITranslationsFilter {
  name?: string;
  displayName?: string;
  tagsIds?: number[];
}
