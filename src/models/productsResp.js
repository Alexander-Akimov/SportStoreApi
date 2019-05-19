export default function ProductsResp(id, name, description, categoryId, categoryName, price = 0.0) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.price = price;

}