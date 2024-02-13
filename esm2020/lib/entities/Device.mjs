import { BaseEntity } from '../entities/BaseEntity';
// Device entity is an IoT device representation with attributes and state
export class Device extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2VudGl0aWVzL0RldmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFRcEQsMEVBQTBFO0FBQzFFLE1BQU0sT0FBTyxNQUFPLFNBQVEsVUFBVTtDQXFFckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTSU0gfSBmcm9tICcuLi9lbnRpdGllcy9TSU0nO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgRGV2aWNlVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9EZXZpY2VUeXBlQ29kZSc7XG5pbXBvcnQgeyBEZXZpY2VTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvRGV2aWNlU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBTdHJpbmdLZXlWYWx1ZSB9IGZyb20gJy4uL2NvbW1vbi9TdHJpbmdLZXlWYWx1ZSc7XG5pbXBvcnQgeyBEZXZpY2VBY3Rpb25Db2RlIH0gZnJvbSAnLi4vZW51bXMvRGV2aWNlQWN0aW9uQ29kZSc7XG5cblxuXG4vLyBEZXZpY2UgZW50aXR5IGlzIGFuIElvVCBkZXZpY2UgcmVwcmVzZW50YXRpb24gd2l0aCBhdHRyaWJ1dGVzIGFuZCBzdGF0ZVxuZXhwb3J0IGNsYXNzIERldmljZSBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFN0cmVhbSBJZCBcbiAgICBwdWJsaWMgc3RyZWFtSWQ6IHN0cmluZztcbiBcbiAgICAvLyBUaGUgZGV2aWNlIGlkZW50aXR5IGluIHRoZSBleHRlcm5hbCBzeXN0ZW0gKHVzZWQgZm9yIGludGVncmF0aW9uKSBcbiAgICBwdWJsaWMgZXh0ZXJuYWxJZDogc3RyaW5nO1xuIFxuICAgIC8vIERldmljZSBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gRGV2aWNlIGRlc2NyaXB0aW9uIFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIENvdW50cnkgbmFtZSBcbiAgICBwdWJsaWMgY291bnRyeTogc3RyaW5nO1xuIFxuICAgIC8vIE1vYmlsZSBuZXR3b3JrIG9wZXJhdG9yIG5hbWUgXG4gICAgcHVibGljIG9wZXJhdG9yOiBzdHJpbmc7XG4gXG4gICAgLy8gRGV2aWNlIHR5cGU6IFVOREVGSU5FRCB8IENPTlRST0xMRVIgfCBNRVRFUiB8IFNFTlNPUiAuLi4gXG4gICAgcHVibGljIHR5cGU6IERldmljZVR5cGVDb2RlO1xuIFxuICAgIC8vIERldmljZSBzdGF0dXM6IFVOREVGSU5FRCB8IFBFTkRJTkcgfCBBQ1RJVkUgfCAgSU5BQ1RJVkUgfCBTVVNQRU5ERUQgXG4gICAgcHVibGljIHN0YXR1czogRGV2aWNlU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBEZXZpY2UgbGFzdCBhY3Rpdml0eSB0aW1lc3RhbXAgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBsYXN0QWN0aXZpdHk6IG51bWJlcjtcbiBcbiAgICAvLyBEZXZpY2UgTUFDIGFkZHJlc3MgXG4gICAgcHVibGljIG1hYzogc3RyaW5nO1xuIFxuICAgIC8vIERldmljZSBJUCBhZGRyZXNzIChJUHY0IG9yIElQdjYpIFxuICAgIHB1YmxpYyBpcDogc3RyaW5nO1xuIFxuICAgIC8vIERldmljZSBtb2JpbGUgc3Vic2NyaWJlciBpZCAoSU1TSSBvciBTVVBJIGZvciA1RykgXG4gICAgcHVibGljIHNpZDogc3RyaW5nO1xuIFxuICAgIC8vIERldmljZSBtb2JpbGUgZXF1aXBtZW50IGlkIChJTUVJIG9yIFBFSSBmb3IgNUcpIFxuICAgIHB1YmxpYyBlaWQ6IHN0cmluZztcbiBcbiAgICAvLyBEZXZpY2UgY3VycmVudCBzZWN1cml0eSBzY29yZSBcbiAgICBwdWJsaWMgc2NvcmU6IG51bWJlcjtcbiBcbiAgICAvLyBMaXN0IG9mIGRldmljZSB0YWdzIFxuICAgIHB1YmxpYyB0YWdzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBDdXN0b20gYXR0cmlidXRlcyAoa2V5LXZhbHVlIHBhaXJzKSBcbiAgICBwdWJsaWMgbGFiZWxzOiBTdHJpbmdLZXlWYWx1ZVtdO1xuIFxuICAgIC8vIE51bWJlciBvZiBldmVudHMgZm9yIHRoZSB0aW1lIHBlcmlvZCAoY2FsY3VsYXRlZCBmaWVsZCkgXG4gICAgcHVibGljIGV2ZW50Q291bnQ6IG51bWJlcjtcbiBcbiAgICAvLyBBY3Rpb24gYXBwbGllZCBvbiB0aGUgZGV2aWNlIFxuICAgIHB1YmxpYyBhY3Rpb25BcHBsaWVkOiBEZXZpY2VBY3Rpb25Db2RlO1xuIFxuICAgIC8vIFdobyBhcHBsaWVkIHRoZSBhY3Rpb24gKHVzZXIgaWQpIFxuICAgIHB1YmxpYyBhY3Rpb25BcHBsaWVkQnk6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIGFjdGlvbiB3YXMgYXBwbGllZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGFjdGlvbkFwcGxpZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIExpc3Qgb2YgU0lNIGNhcmRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgZGV2aWNlIFxuICAgIHB1YmxpYyBzaW1DYXJkczogU0lNW107XG4gXG4gXG59XG5cblxuIl19