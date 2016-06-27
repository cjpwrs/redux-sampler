/**
 * Created by cjpowers on 6/26/16.
 */
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ProductForm = ({ product, allUsers, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage Product</h1>
      <TextInput
        name="title"
        label="Title"
        value={product.title}
        onChange={onChange}
        error={errors.title}/>
      
      <SelectInput
        name="userId"
        label="User"
        value={product.userId}
        defaultOption="Select User"
        options={allUsers}
        onChange={onChange} error={errors.userId} />
      
      <TextInput
        name="price"
        label="Price"
        value={product.price}
        onChange={onChange}
        error={errors.price} />
      
      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save' }
        className="btn btn-primary"
        onClick={onSave}/>
        
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
