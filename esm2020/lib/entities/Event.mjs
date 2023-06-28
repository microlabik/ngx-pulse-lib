import { BaseEntity } from '../entities/BaseEntity';
// Cyber event entity
// The Event entity is created by multiple services (e.g. ip reputation, static rules, anomaly detection) by analyzing network statistics (usage and session data) and related to specific IP address.
// Since it is not always clear what is the actual device with the IP address (RADIUS or DIAMETER logs can be provided later), we should be able to create event without device Id and assign the device Id later on.
// For this purpose, when the device Id is not provided, the event will be created with the `unknown` value in the deviceId field and the eventId must follow the following pattern: streamId:timestamp:ip_address
export class Event extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvZW50aXRpZXMvRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTXBELHFCQUFxQjtBQUNyQixzTUFBc007QUFDdE0scU5BQXFOO0FBQ3JOLGtOQUFrTjtBQUNsTixNQUFNLE9BQU8sS0FBTSxTQUFRLFVBQVU7Q0F5RHBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvRXZlbnRTdGF0dXNDb2RlJztcbmltcG9ydCB7IEluZGljYXRvciB9IGZyb20gJy4uL2NvbW1vbi9JbmRpY2F0b3InO1xuaW1wb3J0IHsgUnVsZVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvUnVsZVR5cGVDb2RlJztcbmltcG9ydCB7IEV2ZW50Q2F0ZWdvcnlDb2RlIH0gZnJvbSAnLi4vZW51bXMvRXZlbnRDYXRlZ29yeUNvZGUnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgRXZlbnRUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0V2ZW50VHlwZUNvZGUnO1xuaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuXG5cblxuLy8gQ3liZXIgZXZlbnQgZW50aXR5XG4vLyBUaGUgRXZlbnQgZW50aXR5IGlzIGNyZWF0ZWQgYnkgbXVsdGlwbGUgc2VydmljZXMgKGUuZy4gaXAgcmVwdXRhdGlvbiwgc3RhdGljIHJ1bGVzLCBhbm9tYWx5IGRldGVjdGlvbikgYnkgYW5hbHl6aW5nIG5ldHdvcmsgc3RhdGlzdGljcyAodXNhZ2UgYW5kIHNlc3Npb24gZGF0YSkgYW5kIHJlbGF0ZWQgdG8gc3BlY2lmaWMgSVAgYWRkcmVzcy5cbi8vIFNpbmNlIGl0IGlzIG5vdCBhbHdheXMgY2xlYXIgd2hhdCBpcyB0aGUgYWN0dWFsIGRldmljZSB3aXRoIHRoZSBJUCBhZGRyZXNzIChSQURJVVMgb3IgRElBTUVURVIgbG9ncyBjYW4gYmUgcHJvdmlkZWQgbGF0ZXIpLCB3ZSBzaG91bGQgYmUgYWJsZSB0byBjcmVhdGUgZXZlbnQgd2l0aG91dCBkZXZpY2UgSWQgYW5kIGFzc2lnbiB0aGUgZGV2aWNlIElkIGxhdGVyIG9uLlxuLy8gRm9yIHRoaXMgcHVycG9zZSwgd2hlbiB0aGUgZGV2aWNlIElkIGlzIG5vdCBwcm92aWRlZCwgdGhlIGV2ZW50IHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSBgdW5rbm93bmAgdmFsdWUgaW4gdGhlIGRldmljZUlkIGZpZWxkIGFuZCB0aGUgZXZlbnRJZCBtdXN0IGZvbGxvdyB0aGUgZm9sbG93aW5nIHBhdHRlcm46IHN0cmVhbUlkOnRpbWVzdGFtcDppcF9hZGRyZXNzXG5leHBvcnQgY2xhc3MgRXZlbnQgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBTdHJlYW0gSWQgXG4gICAgcHVibGljIHN0cmVhbUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRGV2aWNlIElkIFxuICAgIHB1YmxpYyBkZXZpY2VJZDogc3RyaW5nO1xuIFxuICAgIC8vIFN0YXJ0IHdpbmRvdyB0aW1lIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgc3RhcnRUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gRW5kIHdpbmRvdyB0aW1lIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZW5kVGltZTogbnVtYmVyO1xuIFxuICAgIC8vIEV2ZW50IHR5cGU6IFVOREVGSU5FRCB8IERET1MgfCBQT1JUX1NDQU5OSU5HIHwgREVWSUNFX1RBS0VPVkVSIC4uLiBcbiAgICBwdWJsaWMgdHlwZTogRXZlbnRUeXBlQ29kZTtcbiBcbiAgICAvLyBFdmVudCBzZXZlcml0eSBsZXZlbDogVU5ERUZJTkVEIHwgTE9XIHwgTUVESVVNIHwgSElHSCB8IENSSVRJQ0FMIFxuICAgIHB1YmxpYyBzZXZlcml0eTogU2V2ZXJpdHlUeXBlQ29kZTtcbiBcbiAgICAvLyBFdmVudCBjdXJyZW50IHNlY3VyaXR5IHNjb3JlIFxuICAgIHB1YmxpYyBzY29yZTogbnVtYmVyO1xuIFxuICAgIC8vIFByb2JhYmlsaXR5IHNjb3JlIGJ5IElQIHJlcHV0YXRpb24gZW5naW5lIFxuICAgIHB1YmxpYyBwcm9iYWJpbGl0eTogbnVtYmVyO1xuIFxuICAgIC8vIEV2ZW50IHdvcmtmbG93IHN0YXR1czogVU5ERUZJTkVEIHwgTkVXIHwgT1BFTiAuLi4gXG4gICAgcHVibGljIHN0YXR1czogRXZlbnRTdGF0dXNDb2RlO1xuIFxuICAgIC8vIExpc3Qgb2YgZXZlbnQgaW5kaWNhdG9ycyBcbiAgICBwdWJsaWMgaW5kaWNhdG9yczogSW5kaWNhdG9yW107XG4gXG4gICAgLy8gUnVsZSB0eXBlOiBVTkRFRklORUQgfCBTVVNQSUNJT1VTX0lQIHwgU1RBVElDIHwgQU5PTUFMWSBcbiAgICBwdWJsaWMgcnVsZVR5cGU6IFJ1bGVUeXBlQ29kZTtcbiBcbiAgICAvLyBTdGF0aWMgUnVsZSBpZCAoaW4gY2FzZSBvZiBTVVNQSUNJT1VTX0lQLCBpdCBzaG91bGQgYmUgdGhlIElQIHZhbHVlKSBcbiAgICBwdWJsaWMgcnVsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRXZlbnQgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gQWRkaXRpb25hbCBFdmVudCB0YWdzIFxuICAgIHB1YmxpYyB0YWdzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBFdmVudCBjYXRlZ29yeSBcbiAgICBwdWJsaWMgY2F0ZWdvcnk6IEV2ZW50Q2F0ZWdvcnlDb2RlO1xuIFxuICAgIC8vIFJlY29tbWVuZGVkIGFjdGlvbiBkZXNjcmlwdGlvbiB0byBhcHBseSBvbiB0aGUgZGV2aWNlIFxuICAgIHB1YmxpYyByZWNvbW1lbmRlZEFjdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIExpc3Qgb2YgcmVmZXJlbmNlZCBzb3VyY2UgZmlsZXMgXG4gICAgcHVibGljIHNvdXJjZXM6IHN0cmluZ1tdO1xuIFxuIFxufVxuXG5cbiJdfQ==