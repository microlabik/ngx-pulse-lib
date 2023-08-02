import { Device } from '../entities/Device';
import { EventOccurrence } from '../entities/EventOccurrence';
import { EventStatusCode } from '../enums/EventStatusCode';
import { EventCategoryCode } from '../enums/EventCategoryCode';
import { Indicator } from '../common/Indicator';
import { RuleTypeCode } from '../enums/RuleTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
import { EventTypeCode } from '../enums/EventTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
export declare class EventWithDevice extends BaseEntity {
    accountId: string;
    streamId: string;
    deviceId: string;
    startTime: number;
    endTime: number;
    type: EventTypeCode;
    severity: SeverityTypeCode;
    score: number;
    probability: number;
    status: EventStatusCode;
    indicators: Indicator[];
    ruleType: RuleTypeCode;
    ruleId: string;
    description: string;
    tags: string[];
    category: EventCategoryCode;
    recommendedAction: string;
    device: Device;
    sources: string[];
    occurrences: EventOccurrence[];
}
