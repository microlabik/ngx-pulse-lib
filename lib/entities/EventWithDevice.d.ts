import { Indicator } from '../common/Indicator';
import { RuleTypeCode } from '../enums/RuleTypeCode';
import { Device } from '../entities/Device';
import { EventTypeCode } from '../enums/EventTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { EventOccurrence } from '../entities/EventOccurrence';
import { BaseEntity } from '../entities/BaseEntity';
import { EventStatusCode } from '../enums/EventStatusCode';
import { EventCategoryCode } from '../enums/EventCategoryCode';
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
    targetIp: string;
    description: string;
    tags: string[];
    category: EventCategoryCode;
    recommendedAction: string;
    device: Device;
    sources: string[];
    occurrences: EventOccurrence[];
}
