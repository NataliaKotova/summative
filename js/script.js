function Course(name, ingredients, price, properties, imageUrl){
    this.name = name;
    this.ingredients = ingredients;
    this.price=price;
    this.properties=properties;
    this.imageUrl=imageUrl;
}
function OrderLine(course,count){
    this.course=course;
    this.count=count;
}

