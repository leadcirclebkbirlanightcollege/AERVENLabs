import { NavigationItem } from '../types';
import { mainNavigation, legalNavigation } from '../config/site';

/**
 * Navigation data architecture.
 * Exposes main header navigation items and legal/footer navigation items.
 */
export const navigationItems: NavigationItem[] = mainNavigation;
export const footerLegalItems: NavigationItem[] = legalNavigation;
