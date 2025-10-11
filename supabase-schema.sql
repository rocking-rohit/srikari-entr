-- Srikari Enterprise Products Table Schema
-- Run this SQL in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    qty INTEGER NOT NULL DEFAULT 0,
    mrp DECIMAL(10,2) NOT NULL,
    offer_price DECIMAL(10,2) NOT NULL,
    discount_percent DECIMAL(5,2) NOT NULL DEFAULT 0,
    image1 TEXT,
    image2 TEXT,
    image3 TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_products_updated_at 
    BEFORE UPDATE ON products 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO products (name, description, qty, mrp, offer_price, discount_percent, image1, status) VALUES
('Prestige Popular Aluminium Pressure Cooker 2 Litre', 'High-quality aluminium pressure cooker perfect for Indian cooking. Features include safety valve, ergonomic handles, and durable construction.', 50, 2500.00, 2000.00, 20.00, 'https://kitchenmart.co.in/cdn/shop/products/prestige-popular-aluminium-pressure-cooker-2-litre-tall-8944131102382-prestige-popular-2l-tall-1125-4620932415578_1200x.jpg?v=1607126319', 'active'),
('iPhone X', 'Apple iPhone X with advanced features including Face ID, dual camera system, and edge-to-edge display. Premium smartphone with cutting-edge technology.', 25, 80000.00, 75000.00, 6.25, 'https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg', 'active'),
('Sample Product 3', 'Third sample product for testing purposes', 100, 200.00, 180.00, 10.00, 'https://via.placeholder.com/300x300', 'inactive');

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access" ON products
    FOR SELECT USING (true);

-- Create policies for admin access (you'll need to implement authentication)
CREATE POLICY "Allow admin full access" ON products
    FOR ALL USING (true);
