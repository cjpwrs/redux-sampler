/**
 * Created by cjpowers on 6/26/16.
 */
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ProductForm = ({ product, allUsers, productCategories, onSave, onDelete, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage Product</h1>
      <TextInput
        type="text"
        name="title"
        label="Title"
        value={product.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="productCategory"
        label="Category"
        value={product.category}
        defaultOption="Select Category"
        options={productCategories}
        onChange={onChange} error={errors.category} />

      <TextInput
      type="number"
      name="price"
      label="Price"
      value={product.price}
      onChange={onChange}
      error={errors.price} />

      <TextInput
        type="number"
        name="quantity"
        label="Quantity"
        value={product.quantity}
        onChange={onChange}
        error={errors.quantity} />

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save' }
        className="btn btn-primary"
        onClick={onSave}/>

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Deleting...' : 'Delete' }
        className="btn btn-primary"
        onClick={onDelete}/>

    </form>
  );
};

ProductForm.propTypes = {
  product: React.PropTypes.object.isRequired,
  allUsers: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default ProductForm;
