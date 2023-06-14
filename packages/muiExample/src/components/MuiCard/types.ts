import type { ComponentOrTag, DesignableProps, TokenSpec } from '@bodiless/fclasses';
import type { DefaultDomains } from '@bodiless/vital-elements';

/**
 * Type representing the "slots" exposed by the MuiCardClean component.
 */
export type MuiCardComponents = {
  Card: ComponentOrTag<any>,
  ContentColumn: ComponentOrTag<any>
  CardContent: ComponentOrTag<any>,
  CardMedia: ComponentOrTag<any>,
  CardMediaContent: ComponentOrTag<any>,
  Title: ComponentOrTag<any>,
  TitleContent: ComponentOrTag<any>,
  Body: ComponentOrTag<any>,
  BodyContent: ComponentOrTag<any>,
  CardActions: ComponentOrTag<any>,
  CTA: ComponentOrTag<any>,
  CTAContent: ComponentOrTag<any>,
  SecondaryCTA: ComponentOrTag<any>,
  SecondaryCTAContent: ComponentOrTag<any>,
};

/**
 * The props accepted by the MuiCardClean component
 */
export type MuiCardProps = DesignableProps<MuiCardComponents>;

/**
 * The type of a token spec which applies to the MuiCardClean component.
 */
export type MuiCardToken = TokenSpec<MuiCardComponents, DefaultDomains>;

/**
 * Tokens for the MuiCardClean component.
 *
 * @category Token Collection
 * @see [[MuiCardClean]]
 */
export interface MuiExampleMuiCard {
  /**
   * Default styling and behavior.
   */
  Default: MuiCardToken;

  /**
   * Adds lizard content
   */
  WithLizardContent: MuiCardToken,

  /**
   * Adds horizontal orientation
   */
  WithHorizontal: MuiCardToken,

  // Document other tokens here.
}
