import { BaseEntity } from '../entities/BaseEntity';
// Cyber event entity
// The Event entity is created by multiple services (e.g. ip reputation, static rules, anomaly detection) by analyzing network statistics (usage and session data) and related to specific IP address.
// Since it is not always clear what is the actual device with the IP address (RADIUS or DIAMETER logs can be provided later), we should be able to create event without device Id and assign the device Id later on.
// For this purpose, when the device Id is not provided, the event will be created with the `unknown` value in the deviceId field and the eventId must follow the following pattern: streamId:timestamp:ip_address
export class Event extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvZW50aXRpZXMvRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBYXBELHFCQUFxQjtBQUNyQixzTUFBc007QUFDdE0scU5BQXFOO0FBQ3JOLGtOQUFrTjtBQUNsTixNQUFNLE9BQU8sS0FBTSxTQUFRLFVBQVU7Q0F3RXBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRPY2N1cnJlbmNlIH0gZnJvbSAnLi4vZW50aXRpZXMvRXZlbnRPY2N1cnJlbmNlJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IEV2ZW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0V2ZW50U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBSdWxlVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9SdWxlVHlwZUNvZGUnO1xuaW1wb3J0IHsgSW5kaWNhdG9yIH0gZnJvbSAnLi4vY29tbW9uL0luZGljYXRvcic7XG5pbXBvcnQgeyBHZW9EYXRhIH0gZnJvbSAnLi4vY29tbW9uL0dlb0RhdGEnO1xuaW1wb3J0IHsgU3RyaW5nS2V5VmFsdWUgfSBmcm9tICcuLi9jb21tb24vU3RyaW5nS2V5VmFsdWUnO1xuaW1wb3J0IHsgRXZlbnRDYXRlZ29yeUNvZGUgfSBmcm9tICcuLi9lbnVtcy9FdmVudENhdGVnb3J5Q29kZSc7XG5pbXBvcnQgeyBUcmFmZmljRGlyZWN0aW9uQ29kZSB9IGZyb20gJy4uL2VudW1zL1RyYWZmaWNEaXJlY3Rpb25Db2RlJztcbmltcG9ydCB7IEV2ZW50VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9FdmVudFR5cGVDb2RlJztcbmltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcblxuXG5cbi8vIEN5YmVyIGV2ZW50IGVudGl0eVxuLy8gVGhlIEV2ZW50IGVudGl0eSBpcyBjcmVhdGVkIGJ5IG11bHRpcGxlIHNlcnZpY2VzIChlLmcuIGlwIHJlcHV0YXRpb24sIHN0YXRpYyBydWxlcywgYW5vbWFseSBkZXRlY3Rpb24pIGJ5IGFuYWx5emluZyBuZXR3b3JrIHN0YXRpc3RpY3MgKHVzYWdlIGFuZCBzZXNzaW9uIGRhdGEpIGFuZCByZWxhdGVkIHRvIHNwZWNpZmljIElQIGFkZHJlc3MuXG4vLyBTaW5jZSBpdCBpcyBub3QgYWx3YXlzIGNsZWFyIHdoYXQgaXMgdGhlIGFjdHVhbCBkZXZpY2Ugd2l0aCB0aGUgSVAgYWRkcmVzcyAoUkFESVVTIG9yIERJQU1FVEVSIGxvZ3MgY2FuIGJlIHByb3ZpZGVkIGxhdGVyKSwgd2Ugc2hvdWxkIGJlIGFibGUgdG8gY3JlYXRlIGV2ZW50IHdpdGhvdXQgZGV2aWNlIElkIGFuZCBhc3NpZ24gdGhlIGRldmljZSBJZCBsYXRlciBvbi5cbi8vIEZvciB0aGlzIHB1cnBvc2UsIHdoZW4gdGhlIGRldmljZSBJZCBpcyBub3QgcHJvdmlkZWQsIHRoZSBldmVudCB3aWxsIGJlIGNyZWF0ZWQgd2l0aCB0aGUgYHVua25vd25gIHZhbHVlIGluIHRoZSBkZXZpY2VJZCBmaWVsZCBhbmQgdGhlIGV2ZW50SWQgbXVzdCBmb2xsb3cgdGhlIGZvbGxvd2luZyBwYXR0ZXJuOiBzdHJlYW1JZDp0aW1lc3RhbXA6aXBfYWRkcmVzc1xuZXhwb3J0IGNsYXNzIEV2ZW50IGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gU3RyZWFtIElkIFxuICAgIHB1YmxpYyBzdHJlYW1JZDogc3RyaW5nO1xuIFxuICAgIC8vIERldmljZSBJZCBcbiAgICBwdWJsaWMgZGV2aWNlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBTdGFydCB3aW5kb3cgdGltZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHN0YXJ0VGltZTogbnVtYmVyO1xuIFxuICAgIC8vIEVuZCB3aW5kb3cgdGltZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGVuZFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBFdmVudCB0eXBlOiBVTkRFRklORUQgfCBERE9TIHwgUE9SVF9TQ0FOTklORyB8IERFVklDRV9UQUtFT1ZFUiAuLi4gXG4gICAgcHVibGljIHR5cGU6IEV2ZW50VHlwZUNvZGU7XG4gXG4gICAgLy8gRXZlbnQgc2V2ZXJpdHkgbGV2ZWw6IFVOREVGSU5FRCB8IExPVyB8IE1FRElVTSB8IEhJR0ggfCBDUklUSUNBTCBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gRXZlbnQgY3VycmVudCBzZWN1cml0eSBzY29yZSBcbiAgICBwdWJsaWMgc2NvcmU6IG51bWJlcjtcbiBcbiAgICAvLyBQcm9iYWJpbGl0eSBzY29yZSBieSBJUCByZXB1dGF0aW9uIGVuZ2luZSBcbiAgICBwdWJsaWMgcHJvYmFiaWxpdHk6IG51bWJlcjtcbiBcbiAgICAvLyBFdmVudCB3b3JrZmxvdyBzdGF0dXM6IFVOREVGSU5FRCB8IE5FVyB8IE9QRU4gLi4uIFxuICAgIHB1YmxpYyBzdGF0dXM6IEV2ZW50U3RhdHVzQ29kZTtcbiBcbiAgICAvLyBMaXN0IG9mIGV2ZW50IGluZGljYXRvcnMgXG4gICAgcHVibGljIGluZGljYXRvcnM6IEluZGljYXRvcltdO1xuIFxuICAgIC8vIFJ1bGUgdHlwZTogVU5ERUZJTkVEIHwgU1VTUElDSU9VU19JUCB8IFNUQVRJQyB8IEFOT01BTFkgXG4gICAgcHVibGljIHJ1bGVUeXBlOiBSdWxlVHlwZUNvZGU7XG4gXG4gICAgLy8gU3RhdGljIFJ1bGUgaWQgKGluIGNhc2Ugb2YgU1VTUElDSU9VU19JUCwgaXQgc2hvdWxkIGJlIHRoZSBJUCB2YWx1ZSkgXG4gICAgcHVibGljIHJ1bGVJZDogc3RyaW5nO1xuIFxuICAgIC8vIFRhcmdldCBJUCBhZGRyZXNzIGZvciBzb21lIG9mIHRoZSBldmVudHMgKGUuZy4gc3VzcGljaW91cyBJUCkgXG4gICAgcHVibGljIHRhcmdldElwOiBzdHJpbmc7XG4gXG4gICAgLy8gR2VvSVAgaW5mb3JtYXRpb24gYmFzZWQgb24gTWF4TWluZCBkYXRhYmFzZSBcbiAgICBwdWJsaWMgdGFyZ2V0TG9jYXRpb246IEdlb0RhdGE7XG4gXG4gICAgLy8gRXZlbnQgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gQWRkaXRpb25hbCBFdmVudCB0YWdzIFxuICAgIHB1YmxpYyB0YWdzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBMaXN0IG9mIGN1c3RvbSBhdHRyaWJ1dGVzIChrZXktdmFsdWUgcGFpcnMpIFxuICAgIHB1YmxpYyBsYWJlbHM6IFN0cmluZ0tleVZhbHVlW107XG4gXG4gICAgLy8gRXZlbnQgY2F0ZWdvcnkgXG4gICAgcHVibGljIGNhdGVnb3J5OiBFdmVudENhdGVnb3J5Q29kZTtcbiBcbiAgICAvLyBSZWNvbW1lbmRlZCBhY3Rpb24gZGVzY3JpcHRpb24gdG8gYXBwbHkgb24gdGhlIGRldmljZSBcbiAgICBwdWJsaWMgcmVjb21tZW5kZWRBY3Rpb246IHN0cmluZztcbiBcbiAgICAvLyBMaXN0IG9mIG9jY3VycmVuY2VzIG9mIHRoZSBhZ2dyZWdhdGVkIGV2ZW50IFxuICAgIHB1YmxpYyBvY2N1cnJlbmNlczogRXZlbnRPY2N1cnJlbmNlW107XG4gXG4gICAgLy8gRGVub3RlcyBuZXR3b3JrIHRyYWZmaWMgZGlyZWN0aW9uOiBVTkRFRklORUQgfCBJTkJPVU5EIHwgT1VUQk9VTkQgXG4gICAgcHVibGljIHRyYWZmaWNEaXJlY3Rpb246IFRyYWZmaWNEaXJlY3Rpb25Db2RlO1xuIFxuICAgIC8vIENvbnRhaW5zIGNvbmZpZGVuY2Ugc2NvcmUgb2YgbWFsaWNpb3VzIElQIGRldGVjdGlvbi4gVmFsdWUgcmFuZ2U6IDAtMTAwIFxuICAgIHB1YmxpYyBjb25maWRlbmNlU2NvcmU6IG51bWJlcjtcbiBcbiBcbn1cblxuXG4iXX0=