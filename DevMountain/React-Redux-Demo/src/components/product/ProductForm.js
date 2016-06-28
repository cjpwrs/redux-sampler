/**
 * Created by cjpowers on 6/26/16.
 */
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ProductForm = ({ product, allUsers, className, productCategories, onSave, onDelete, onChange, loading, errors}) => {
  return (
    <divd>
      <form>
        <h3>Listing Details</h3>
        <h4>Title<span className="asterisk">*</span></h4>
          <TextInput
            type="text"
            name="title"
            label="Title"
            value={product.title}
            onChange={onChange}
            error={errors.title}/>

        <h4>About this listing<span className="asterisk">*</span></h4>
          <SelectInput
            name="who-made-it"
            value={product.category}
            defaultOption="Who made it?"
            options={productCategories}
            onChange={onChange} error={errors.category} />
          <SelectInput
            name="what-is-it"
            value={product.category}
            defaultOption="What is it?"
            options={productCategories}
            onChange={onChange} error={errors.category} />
          <SelectInput
            name="when-was-it-made"
            value={product.category}
            defaultOption="When was it made?"
            options={productCategories}
            onChange={onChange} error={errors.category} />

        <h4>Category<span className="asterisk">*</span></h4>
          <SelectInput
            name="productCategory"
            label="Category"
            value={product.category}
            defaultOption="Select Category"
            options={productCategories}
            onChange={onChange} error={errors.category} />

        <h4>Price<span className="asterisk">*</span></h4>
          <TextInput
          type="number"
          name="price"
          label="Price"
          value={product.price}
          onChange={onChange}
          error={errors.price} />

        <h4>Quantity<span className="asterisk">*</span></h4>
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
    </divd>
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
