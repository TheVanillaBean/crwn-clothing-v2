import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selectors';
import './category.styles.scss';

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const categoriesIsLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className='title'>{category.toUpperCase()}</h2>
      {categoriesIsLoading ? (
        <Spinner />
      ) : (
        <div className='category-container'>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
      )}
    </>
  );
};

export default Category;
