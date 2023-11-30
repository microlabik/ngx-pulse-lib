// TimeSeriesOf2D model represents a 2 dimension samples over time
export class TimeSeriesOf2D {
    constructor(name, range, values) {
        if (name !== undefined) {
            this.name = name;
        }
        if (range !== undefined) {
            this.range = range;
        }
        if (values !== undefined) {
            this.values = values;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVNlcmllc09mMkQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvY29tbW9uL1RpbWVTZXJpZXNPZjJELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLGtFQUFrRTtBQUNsRSxNQUFNLE9BQU8sY0FBYztJQVd0QixZQUFZLElBQWEsRUFBRSxLQUFpQixFQUFFLE1BQTBCO1FBQ3JFLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDN0MsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FBRTtRQUNoRCxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUFFO0lBQ3ZELENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVEYXRhUG9pbnQyRCB9IGZyb20gJy4uL2NvbW1vbi9UaW1lRGF0YVBvaW50MkQnO1xuaW1wb3J0IHsgVGltZUZyYW1lIH0gZnJvbSAnLi4vY29tbW9uL1RpbWVGcmFtZSc7XG5cblxuXG4vLyBUaW1lU2VyaWVzT2YyRCBtb2RlbCByZXByZXNlbnRzIGEgMiBkaW1lbnNpb24gc2FtcGxlcyBvdmVyIHRpbWVcbmV4cG9ydCBjbGFzcyBUaW1lU2VyaWVzT2YyRCB7XG4gXG4gICAgLy8gTmFtZSBvZiB0aGUgdGltZSBzZXJpZXMgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBSYW5nZSBvZiB0aGUgc2VyaWVzIChmcm9tIC4uLiB0bykgXG4gICAgcHVibGljIHJhbmdlOiBUaW1lRnJhbWU7XG4gXG4gICAgLy8gU2VyaWVzIG9mIGZsb2F0IGRhdGEgcG9pbnRzIFxuICAgIHB1YmxpYyB2YWx1ZXM6IFRpbWVEYXRhUG9pbnQyRFtdO1xuIFxuICAgICBjb25zdHJ1Y3RvcihuYW1lPzogc3RyaW5nLCByYW5nZT86IFRpbWVGcmFtZSwgdmFsdWVzPzogVGltZURhdGFQb2ludDJEW10pIHsgXG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHsgdGhpcy5uYW1lID0gbmFtZTsgfVxuICAgICAgICBpZiAocmFuZ2UgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnJhbmdlID0gcmFuZ2U7IH1cbiAgICAgICAgaWYgKHZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudmFsdWVzID0gdmFsdWVzOyB9XG4gICAgfVxuXG59XG5cblxuIl19