import React, { useEffect } from 'react';
import { getToken } from './utils';
import Layout from './Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
// NOTE: import dashboard
import DashboardPage from './dashboard/DashboardPage';
// NOTE: import supplier
import SuppliersPage from './supplier/SuppliersPage';
import SupplierCreatePage from './supplier/SupplierCreatePage';
import SupplierEditPage from './supplier/SupplierEditPage';
// NOTE: import category
import CategoriesPage from './category/CategoriesPage';
import CategoryCreatePage from './category/CategoryCreatePage';
import CategoryEditPage from './category/CategoryEditPage';
// NOTE: import product
import ProductsPage from './product/ProductsPage';
import ProductCreatePage from './product/ProductCreatePage';
import ProductEditPage from './product/ProductEditPage';
// NOTE: import purchase
import PurchasesPage from './purchase/PurchasesPage';
import PurchaseCreatePage from './purchase/PurchaseCreatePage';
// NOTE: import sale
import SalesPage from './sale/SalesPage';
import SaleCreatePage from './sale/SaleCreatePage';

function ProtectedPage(props) {
  const { history } = props;
  useEffect(() => {
    const token = getToken();
    if (!token) {
      history.push('/login');
    }
  });

  return (
    <Layout {...props}>
      <Switch>

        // NOTE: routing untuk dashboard
        <Route exact path="/" component={DashboardPage} />

        // NOTE: routing untuk supplier
        <Route path="/suppliers/create" component={SupplierCreatePage} />
        <Route path="/suppliers/:supplierId" component={SupplierEditPage} />
        <Route path="/suppliers" component={SuppliersPage} />

        // NOTE: routing untuk category
        <Route path="/categories/create" component={CategoryCreatePage} />
        <Route path="/categories/:categoryId" component={CategoryEditPage} />
        <Route path="/categories" component={CategoriesPage} />

        // NOTE: Routing untuk product
        <Route path="/products/create" component={ProductCreatePage} />
        <Route path="/products/:productId" component={ProductEditPage} />
        <Route path="/products" component={ProductsPage} />

        // NOTE: Routing untuk pembelian
        <Route path="/purchases/create" component={PurchaseCreatePage} />
        <Route path="/purchases" component={PurchasesPage} />

        // NOTE: routing untuk Penjualan
        <Route path="/sales/create" component={SaleCreatePage} />
        <Route path="/sales" component={SalesPage} />

        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default ProtectedPage;
