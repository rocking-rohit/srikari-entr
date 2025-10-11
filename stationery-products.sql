-- Stationery Products for Srikari Enterprise Database
-- Based on the products table schema: id, name, description, qty, mrp, offer_price, discount_percent, image1, image2, image3, status, timestamps

-- 1. Classmate Notebook (Already exists - updating with better description)
UPDATE products SET 
  description = 'Premium quality Classmate notebook with 200 pages, ruled sheets, and durable binding. Perfect for students and professionals.',
  image1 = 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg',
  image2 = 'https://5.imimg.com/data5/SELLER/Default/2021/12/QD/RT/YL/1043483/classmate-notebook.jpg',
  image3 = 'https://rukminim2.flixcart.com/image/850/1000/xif0q/notebook/8/4/8/classmate-notebook-200-pages-ruled-original-imagz8gz8hzfhzvn.jpeg'
WHERE name = 'Classmate Notebook';

-- 2. Parker Pen Set
INSERT INTO products (name, description, qty, mrp, offer_price, discount_percent, image1, image2, image3, status) VALUES
('Parker Pen Set - Premium Collection', 'Elegant Parker pen set with ballpoint and gel pens. Professional writing instruments with smooth ink flow and ergonomic design. Perfect for office and personal use.', 30, 1200.00, 999.00, 16.75, 'https://m.media-amazon.com/images/I/61QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg', 'https://5.imimg.com/data5/SELLER/Default/2021/12/QD/RT/YL/1043483/parker-pen-set.jpg', 'https://rukminim2.flixcart.com/image/850/1000/xif0q/pen/8/4/8/parker-premium-collection-original-imagz8gz8hzfhzvn.jpeg', 'active');

-- 3. A4 Size Paper Ream
INSERT INTO products (name, description, qty, mrp, offer_price, discount_percent, image1, image2, image3, status) VALUES
('A4 Size Paper Ream - 500 Sheets', 'High-quality A4 size paper ream with 500 sheets. 80 GSM weight, bright white color, smooth finish. Ideal for printing, photocopying, and office documentation.', 50, 250.00, 199.00, 20.40, 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg', 'https://5.imimg.com/data5/SELLER/Default/2021/12/QD/RT/YL/1043483/a4-paper-ream.jpg', 'https://rukminim2.flixcart.com/image/850/1000/xif0q/paper/8/4/8/a4-paper-ream-500-sheets-original-imagz8gz8hzfhzvn.jpeg', 'active');

-- 4. Stapler with Staples
INSERT INTO products (name, description, qty, mrp, offer_price, discount_percent, image1, image2, image3, status) VALUES
('Heavy Duty Stapler with 1000 Staples', 'Professional heavy-duty stapler with 1000 staples included. Metal construction, comfortable grip, and smooth operation. Perfect for office and home use.', 25, 450.00, 350.00, 22.22, 'https://m.media-amazon.com/images/I/61QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg', 'https://5.imimg.com/data5/SELLER/Default/2021/12/QD/RT/YL/1043483/stapler-heavy-duty.jpg', 'https://rukminim2.flixcart.com/image/850/1000/xif0q/stapler/8/4/8/heavy-duty-stapler-1000-staples-original-imagz8gz8hzfhzvn.jpeg', 'active');

-- 5. File Folders Set
INSERT INTO products (name, description, qty, mrp, offer_price, discount_percent, image1, image2, image3, status) VALUES
('File Folders Set - 10 Pieces', 'Set of 10 colorful file folders with tabs. Durable cardboard construction, labeled tabs for easy organization. Perfect for office filing and document management.', 40, 180.00, 149.00, 17.22, 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg', 'https://5.imimg.com/data5/SELLER/Default/2021/12/QD/RT/YL/1043483/file-folders-set.jpg', 'https://rukminim2.flixcart.com/image/850/1000/xif0q/folder/8/4/8/file-folders-set-10-pieces-original-imagz8gz8hzfhzvn.jpeg', 'active');

-- 6. Calculator - Scientific
INSERT INTO products (name, description, qty, mrp, offer_price, discount_percent, image1, image2, image3, status) VALUES
('Scientific Calculator - Casio FX-991EX', 'Advanced scientific calculator with 552 functions, natural textbook display, and solar power. Perfect for students, engineers, and professionals. Includes protective case.', 20, 1200.00, 999.00, 16.75, 'https://m.media-amazon.com/images/I/61QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg', 'https://5.imimg.com/data5/SELLER/Default/2021/12/QD/RT/YL/1043483/casio-calculator.jpg', 'https://rukminim2.flixcart.com/image/850/1000/xif0q/calculator/8/4/8/casio-fx-991ex-scientific-original-imagz8gz8hzfhzvn.jpeg', 'active');

-- 7. Highlighters Set
INSERT INTO products (name, description, qty, mrp, offer_price, discount_percent, image1, image2, image3, status) VALUES
('Fluorescent Highlighters Set - 6 Colors', 'Set of 6 fluorescent highlighters in different colors. Water-based ink, chisel tip design, and bright colors. Perfect for studying, note-taking, and document marking.', 60, 120.00, 89.00, 25.83, 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg', 'https://5.imimg.com/data5/SELLER/Default/2021/12/QD/RT/YL/1043483/highlighters-set.jpg', 'https://rukminim2.flixcart.com/image/850/1000/xif0q/highlighter/8/4/8/fluorescent-highlighters-6-colors-original-imagz8gz8hzfhzvn.jpeg', 'active');

-- Additional stationery products for variety:

-- 8. Eraser Set
INSERT INTO products (name, description, qty, mrp, offer_price, discount_percent, image1, image2, image3, status) VALUES
('Eraser Set - 5 Pieces', 'Set of 5 high-quality erasers in different shapes and sizes. Non-dust formula, clean erasing, and durable construction. Perfect for students and artists.', 80, 50.00, 35.00, 30.00, 'https://m.media-amazon.com/images/I/61QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg', 'https://5.imimg.com/data5/SELLER/Default/2021/12/QD/RT/YL/1043483/eraser-set.jpg', 'https://rukminim2.flixcart.com/image/850/1000/xif0q/eraser/8/4/8/eraser-set-5-pieces-original-imagz8gz8hzfhzvn.jpeg', 'active');

-- 9. Pencil Box
INSERT INTO products (name, description, qty, mrp, offer_price, discount_percent, image1, image2, image3, status) VALUES
('Transparent Pencil Box - Large Size', 'Large transparent pencil box with multiple compartments. Durable plastic construction, secure latch, and organized storage. Perfect for students and office use.', 35, 80.00, 59.00, 26.25, 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg', 'https://5.imimg.com/data5/SELLER/Default/2021/12/QD/RT/YL/1043483/pencil-box.jpg', 'https://rukminim2.flixcart.com/image/850/1000/xif0q/pencil-box/8/4/8/transparent-pencil-box-large-original-imagz8gz8hzfhzvn.jpeg', 'active');

-- 10. Ruler Set
INSERT INTO products (name, description, qty, mrp, offer_price, discount_percent, image1, image2, image3, status) VALUES
('Ruler Set - 30cm & 15cm', 'Set of 2 rulers - 30cm and 15cm. Clear plastic construction, metric and imperial measurements, and non-slip design. Essential for students and professionals.', 45, 40.00, 29.00, 27.50, 'https://m.media-amazon.com/images/I/61QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg', 'https://5.imimg.com/data5/SELLER/Default/2021/12/QD/RT/YL/1043483/ruler-set.jpg', 'https://rukminim2.flixcart.com/image/850/1000/xif0q/ruler/8/4/8/ruler-set-30cm-15cm-original-imagz8gz8hzfhzvn.jpeg', 'active');
