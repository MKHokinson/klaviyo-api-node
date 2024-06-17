/**
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { BounceDateFilter } from './bounceDateFilter';
import { BounceDateFilterFilter } from './bounceDateFilterFilter';
import { InvalidEmailDateEnum } from './invalidEmailDateEnum';
import { InvalidEmailDateFilter } from './invalidEmailDateFilter';
import { ManualSuppressionDateFilter } from './manualSuppressionDateFilter';
export type NoEmailMarketingFiltersInner = BounceDateFilter | ManualSuppressionDateFilter | InvalidEmailDateFilter;