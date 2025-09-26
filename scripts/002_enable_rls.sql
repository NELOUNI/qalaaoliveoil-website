-- Enable Row Level Security on all tables
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE gift_configurations ENABLE ROW LEVEL SECURITY;
ALTER TABLE bulk_order_requests ENABLE ROW LEVEL SECURITY;

-- Products: Public read access, admin write access
CREATE POLICY "products_select_all" ON products FOR SELECT USING (true);

-- Categories: Public read access
CREATE POLICY "categories_select_all" ON categories FOR SELECT USING (true);
CREATE POLICY "product_categories_select_all" ON product_categories FOR SELECT USING (true);

-- Profiles: Users can only access their own profile
CREATE POLICY "profiles_select_own" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles_insert_own" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles_update_own" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Orders: Users can only access their own orders
CREATE POLICY "orders_select_own" ON orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "orders_insert_own" ON orders FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "orders_update_own" ON orders FOR UPDATE USING (auth.uid() = user_id);

-- Order items: Users can access items from their own orders
CREATE POLICY "order_items_select_own" ON order_items FOR SELECT 
  USING (EXISTS (SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid()));
CREATE POLICY "order_items_insert_own" ON order_items FOR INSERT 
  WITH CHECK (EXISTS (SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid()));

-- Gift configurations: Public read access
CREATE POLICY "gift_configs_select_all" ON gift_configurations FOR SELECT USING (is_active = true);

-- Bulk order requests: Users can only access their own requests
CREATE POLICY "bulk_requests_select_own" ON bulk_order_requests FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "bulk_requests_insert_own" ON bulk_order_requests FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "bulk_requests_update_own" ON bulk_order_requests FOR UPDATE USING (auth.uid() = user_id);
