-- Insert categories
INSERT INTO categories (name_en, name_ar, description_en, description_ar, slug) VALUES
('Extra Virgin', 'زيت زيتون بكر ممتاز', 'Premium extra virgin olive oils with exceptional quality', 'زيوت زيتون بكر ممتاز عالية الجودة', 'extra-virgin'),
('Organic', 'عضوي', 'Certified organic olive oils from sustainable farming', 'زيوت زيتون عضوية معتمدة من الزراعة المستدامة', 'organic'),
('Limited Edition', 'إصدار محدود', 'Rare and exclusive olive oil varieties', 'أصناف نادرة وحصرية من زيت الزيتون', 'limited-edition'),
('Gift Sets', 'مجموعات الهدايا', 'Curated gift collections for special occasions', 'مجموعات هدايا منتقاة للمناسبات الخاصة', 'gift-sets');

-- Insert sample products
INSERT INTO products (
  name_en, name_ar, description_en, description_ar, origin_story_en, origin_story_ar,
  price, volume_ml, harvest_year, region_en, region_ar, acidity_level,
  tasting_notes_en, tasting_notes_ar, stock_quantity, is_premium
) VALUES
(
  'Sfax Gold Reserve', 'احتياطي صفاقس الذهبي',
  'Premium extra virgin olive oil from the ancient groves of Sfax, cold-pressed within hours of harvest.',
  'زيت زيتون بكر ممتاز من بساتين صفاقس العريقة، معصور على البارد خلال ساعات من القطف.',
  'Our Sfax Gold Reserve comes from olive trees that have stood for over 800 years in the fertile plains of Sfax. Each tree tells a story of generations of Tunisian farmers who have perfected the art of olive cultivation, passing down their knowledge through centuries of tradition.',
  'يأتي احتياطي صفاقس الذهبي من أشجار الزيتون التي وقفت لأكثر من 800 عام في سهول صفاقس الخصبة. كل شجرة تحكي قصة أجيال من المزارعين التونسيين الذين أتقنوا فن زراعة الزيتون.',
  89.99, 500, 2024, 'Sfax', 'صفاقس', 0.18,
  ARRAY['Fruity', 'Peppery', 'Herbaceous', 'Almond finish'],
  ARRAY['فاكهي', 'فلفلي', 'عشبي', 'طعم اللوز'],
  50, true
),
(
  'Monastir Heritage', 'تراث المنستير',
  'Artisanal olive oil from coastal groves, featuring a delicate balance of sea breeze and Mediterranean sun.',
  'زيت زيتون حرفي من البساتين الساحلية، يتميز بتوازن رقيق بين نسيم البحر وشمس البحر المتوسط.',
  'The olive groves of Monastir have been kissed by Mediterranean breezes for millennia. Our Heritage blend captures the essence of this coastal terroir, where the proximity to the sea creates a unique microclimate that produces olives with exceptional character.',
  'بساتين الزيتون في المنستير تقبلها نسائم البحر المتوسط منذ آلاف السنين. مزيجنا التراثي يلتقط جوهر هذا التربة الساحلية.',
  65.99, 750, 2024, 'Monastir', 'المنستير', 0.22,
  ARRAY['Citrusy', 'Mild pepper', 'Green apple', 'Sea salt notes'],
  ARRAY['حمضي', 'فلفل خفيف', 'تفاح أخضر', 'نكهة ملح البحر'],
  75, false
),
(
  'Kairouan Sacred Grove', 'بستان القيروان المقدس',
  'Single-estate olive oil from the spiritual heart of Tunisia, where tradition meets divine inspiration.',
  'زيت زيتون من مزرعة واحدة من القلب الروحي لتونس، حيث يلتقي التقليد بالإلهام الإلهي.',
  'In the shadow of the Great Mosque of Kairouan, our sacred grove has been tended by the same family for 12 generations. This oil carries the blessings of centuries of prayer and the wisdom of ancient cultivation methods passed down through Islamic tradition.',
  'في ظل الجامع الكبير بالقيروان، تم الاعتناء ببستاننا المقدس من قبل نفس العائلة لـ 12 جيلاً. يحمل هذا الزيت بركات قرون من الصلاة.',
  125.99, 250, 2024, 'Kairouan', 'القيروان', 0.15,
  ARRAY['Intense fruity', 'Spicy', 'Artichoke', 'Long finish'],
  ARRAY['فاكهي مكثف', 'حار', 'أرضي شوكي', 'طعم طويل'],
  25, true
);

-- Link products to categories
INSERT INTO product_categories (product_id, category_id)
SELECT p.id, c.id 
FROM products p, categories c 
WHERE (p.name_en = 'Sfax Gold Reserve' AND c.slug = 'extra-virgin')
   OR (p.name_en = 'Sfax Gold Reserve' AND c.slug = 'limited-edition')
   OR (p.name_en = 'Monastir Heritage' AND c.slug = 'extra-virgin')
   OR (p.name_en = 'Kairouan Sacred Grove' AND c.slug = 'extra-virgin')
   OR (p.name_en = 'Kairouan Sacred Grove' AND c.slug = 'limited-edition');

-- Insert gift configurations
INSERT INTO gift_configurations (
  name_en, name_ar, description_en, description_ar, box_type, max_products, base_price
) VALUES
(
  'Heritage Collection Box', 'صندوق مجموعة التراث',
  'Elegant wooden box with traditional Tunisian motifs, perfect for 2-3 bottles',
  'صندوق خشبي أنيق بزخارف تونسية ��قليدية، مثالي لـ 2-3 زجاجات',
  'wooden_heritage', 3, 25.00
),
(
  'Premium Gift Set', 'مجموعة الهدايا المميزة',
  'Luxury presentation box with silk lining and gold accents',
  'صندوق عرض فاخر مع بطانة حريرية ولمسات ذهبية',
  'luxury_silk', 2, 45.00
),
(
  'Corporate Collection', 'المجموعة المؤسسية',
  'Professional gift box suitable for business presentations',
  'صندوق هدايا مهني مناسب للعروض التجارية',
  'corporate_black', 4, 35.00
);
