// Node represents a vertex in a network map
export class Node {
    constructor(id, name, ip, type) {
        if (id !== undefined) {
            this.id = id;
        }
        if (name !== undefined) {
            this.name = name;
        }
        if (ip !== undefined) {
            this.ip = ip;
        }
        if (type !== undefined) {
            this.type = type;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9jb21tb24vTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSw0Q0FBNEM7QUFDNUMsTUFBTSxPQUFPLElBQUk7SUFjWixZQUFZLEVBQVcsRUFBRSxJQUFhLEVBQUUsRUFBVyxFQUFFLElBQXFCO1FBQ3ZFLElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQUU7UUFDdkMsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FBRTtRQUM3QyxJQUFJLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQ3ZDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQUU7SUFDakQsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGV2aWNlVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9EZXZpY2VUeXBlQ29kZSc7XG5cblxuXG4vLyBOb2RlIHJlcHJlc2VudHMgYSB2ZXJ0ZXggaW4gYSBuZXR3b3JrIG1hcFxuZXhwb3J0IGNsYXNzIE5vZGUge1xuIFxuICAgIC8vIE5vZGUgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gTm9kZSBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gTm9kZSBJUCBcbiAgICBwdWJsaWMgaXA6IHN0cmluZztcbiBcbiAgICAvLyBEZXZpY2UgdHlwZSAoZm9yIG5vZGVzIHJlcHJlc2VudGluZyBhIGRldmljZSkgXG4gICAgcHVibGljIHR5cGU6IERldmljZVR5cGVDb2RlO1xuIFxuICAgICBjb25zdHJ1Y3RvcihpZD86IHN0cmluZywgbmFtZT86IHN0cmluZywgaXA/OiBzdHJpbmcsIHR5cGU/OiBEZXZpY2VUeXBlQ29kZSkgeyBcbiAgICAgICAgaWYgKGlkICE9PSB1bmRlZmluZWQpIHsgdGhpcy5pZCA9IGlkOyB9XG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHsgdGhpcy5uYW1lID0gbmFtZTsgfVxuICAgICAgICBpZiAoaXAgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmlwID0gaXA7IH1cbiAgICAgICAgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnR5cGUgPSB0eXBlOyB9XG4gICAgfVxuXG59XG5cblxuIl19