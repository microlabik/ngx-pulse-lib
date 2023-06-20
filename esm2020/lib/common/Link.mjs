// Link represents a relation between two nodes
export class Link {
    constructor(id, name, src, dst, value) {
        if (id !== undefined) {
            this.id = id;
        }
        if (name !== undefined) {
            this.name = name;
        }
        if (src !== undefined) {
            this.src = src;
        }
        if (dst !== undefined) {
            this.dst = dst;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wdWxzZS1saWIvc3JjL2xpYi9jb21tb24vTGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwrQ0FBK0M7QUFDL0MsTUFBTSxPQUFPLElBQUk7SUFpQlosWUFBWSxFQUFXLEVBQUUsSUFBYSxFQUFFLEdBQVksRUFBRSxHQUFZLEVBQUUsS0FBYztRQUMvRSxJQUFJLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUFFO1FBQ3ZDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDN0MsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FBRTtRQUMxQyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUFFO1FBQzFDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQUU7SUFDcEQsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLy8gTGluayByZXByZXNlbnRzIGEgcmVsYXRpb24gYmV0d2VlbiB0d28gbm9kZXNcbmV4cG9ydCBjbGFzcyBMaW5rIHtcbiBcbiAgICAvLyBMaW5rIElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIExpbmsgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFNvdXJjZSBOb2RlIElkIChmcm9tKSBcbiAgICBwdWJsaWMgc3JjOiBzdHJpbmc7XG4gXG4gICAgLy8gRGVzdGluYXRpb24gTm9kZSBJZCAodG8pIFxuICAgIHB1YmxpYyBkc3Q6IHN0cmluZztcbiBcbiAgICAvLyBMaW5rIG51bWVyaWMgdmFsdWUgXG4gICAgcHVibGljIHZhbHVlOiBudW1iZXI7XG4gXG4gICAgIGNvbnN0cnVjdG9yKGlkPzogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCBzcmM/OiBzdHJpbmcsIGRzdD86IHN0cmluZywgdmFsdWU/OiBudW1iZXIpIHsgXG4gICAgICAgIGlmIChpZCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuaWQgPSBpZDsgfVxuICAgICAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMubmFtZSA9IG5hbWU7IH1cbiAgICAgICAgaWYgKHNyYyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc3JjID0gc3JjOyB9XG4gICAgICAgIGlmIChkc3QgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmRzdCA9IGRzdDsgfVxuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnZhbHVlID0gdmFsdWU7IH1cbiAgICB9XG5cbn1cblxuXG4iXX0=