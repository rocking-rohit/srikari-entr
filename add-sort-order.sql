-- Add sort_order column to products table
ALTER TABLE products ADD COLUMN sort_order INTEGER DEFAULT 0;

-- Update existing products with sort order
UPDATE products SET sort_order = 1 WHERE name = 'Classmate Notebook';
UPDATE products SET sort_order = 2 WHERE name = 'iPhone X';
UPDATE products SET sort_order = 3 WHERE name = 'Prestige Popular Aluminium Pressure Cooker 2 Litre';

-- Update stationery products with sort order
UPDATE products SET sort_order = 4 WHERE name = 'Parker Pen Set - Premium Collection';
UPDATE products SET sort_order = 5 WHERE name = 'A4 Size Paper Ream - 500 Sheets';
UPDATE products SET sort_order = 6 WHERE name = 'Heavy Duty Stapler with 1000 Staples';
UPDATE products SET sort_order = 7 WHERE name = 'File Folders Set - 10 Pieces';
UPDATE products SET sort_order = 8 WHERE name = 'Scientific Calculator - Casio FX-991EX';
UPDATE products SET sort_order = 9 WHERE name = 'Fluorescent Highlighters Set - 6 Colors';
UPDATE products SET sort_order = 10 WHERE name = 'Eraser Set - 5 Pieces';
UPDATE products SET sort_order = 11 WHERE name = 'Transparent Pencil Box - Large Size';
UPDATE products SET sort_order = 12 WHERE name = 'Ruler Set - 30cm & 15cm';
UPDATE products SET sort_order = 13 WHERE name = 'Spiral Notebook Set - 3 Pieces';
