-- Create web_categories table
CREATE TABLE IF NOT EXISTS web_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL UNIQUE,
  slug VARCHAR(255) NOT NULL UNIQUE,
  icon VARCHAR(50),
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Create web_variants table
CREATE TABLE IF NOT EXISTS web_variants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES web_categories(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  sku VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(255) NOT NULL,
  description TEXT,
  image_path VARCHAR(500),
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  UNIQUE(category_id, sku)
);

-- Create view for categories with variant counts
CREATE OR REPLACE VIEW web_categories_with_counts AS
SELECT 
  c.id,
  c.name,
  c.slug,
  c.icon,
  c.description,
  c.display_order,
  c.is_active,
  c.created_at,
  c.updated_at,
  COALESCE(COUNT(v.id), 0)::INTEGER as variant_count
FROM web_categories c
LEFT JOIN web_variants v ON c.id = v.category_id
GROUP BY c.id, c.name, c.slug, c.icon, c.description, c.display_order, c.is_active, c.created_at, c.updated_at;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_web_categories_slug ON web_categories(slug);
CREATE INDEX IF NOT EXISTS idx_web_categories_is_active ON web_categories(is_active);
CREATE INDEX IF NOT EXISTS idx_web_categories_display_order ON web_categories(display_order);
CREATE INDEX IF NOT EXISTS idx_web_variants_category_id ON web_variants(category_id);
CREATE INDEX IF NOT EXISTS idx_web_variants_slug ON web_variants(slug);
CREATE INDEX IF NOT EXISTS idx_web_variants_sku ON web_variants(sku);
CREATE INDEX IF NOT EXISTS idx_web_variants_is_active ON web_variants(is_active);

-- Enable RLS
ALTER TABLE web_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE web_variants ENABLE ROW LEVEL SECURITY;

-- RLS Policies for web_categories
-- Allow everyone to read active categories
CREATE POLICY "Allow public read active categories" ON web_categories
  FOR SELECT
  USING (is_active = true);

-- Allow admins to read all categories
CREATE POLICY "Allow admins read all categories" ON web_categories
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.user_metadata->>'role' = 'admin'
    )
  );

-- Allow admins to create categories
CREATE POLICY "Allow admins create categories" ON web_categories
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.user_metadata->>'role' = 'admin'
    )
  );

-- Allow admins to update categories
CREATE POLICY "Allow admins update categories" ON web_categories
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.user_metadata->>'role' = 'admin'
    )
  );

-- Allow admins to delete categories
CREATE POLICY "Allow admins delete categories" ON web_categories
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.user_metadata->>'role' = 'admin'
    )
  );

-- RLS Policies for web_variants
-- Allow everyone to read active variants
CREATE POLICY "Allow public read active variants" ON web_variants
  FOR SELECT
  USING (is_active = true);

-- Allow admins to read all variants
CREATE POLICY "Allow admins read all variants" ON web_variants
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.user_metadata->>'role' = 'admin'
    )
  );

-- Allow admins to create variants
CREATE POLICY "Allow admins create variants" ON web_variants
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.user_metadata->>'role' = 'admin'
    )
  );

-- Allow admins to update variants
CREATE POLICY "Allow admins update variants" ON web_variants
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.user_metadata->>'role' = 'admin'
    )
  );

-- Allow admins to delete variants
CREATE POLICY "Allow admins delete variants" ON web_variants
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.user_metadata->>'role' = 'admin'
    )
  );

-- Insert default categories
INSERT INTO web_categories (name, slug, icon, description, display_order, is_active) VALUES
('Bandages, Tapes and Dressings', 'bandages-tapes-and-dressings', '🩹', 'Medical dressings and bandages', 1, true),
('Bottles and Containers', 'bottles-and-containers', '🔵', 'Storage bottles and containers', 2, true),
('Catheters and Tubes', 'catheters-and-tubes', '🧪', 'Medical catheters and tubes', 3, true),
('Cotton Wool', 'cotton-wool', '☁️', 'Premium cotton wool products', 4, true),
('Diapers and Sanitary', 'diapers-and-sanitary', '👶', 'Diaper and sanitary products', 5, true),
('Gloves', 'gloves', '🧤', 'Medical gloves', 6, true),
('Hospital Equipments', 'hospital-equipments', '🖥️', 'Medical equipment', 7, true),
('Hospital Furniture', 'hospital-furniture', '🛏️', 'Hospital beds and furniture', 8, true),
('Hospital Instruments', 'hospital-instruments', '🔧', 'Surgical instruments', 9, true),
('Hospital Linen', 'hospital-linen', '👕', 'Hospital linens', 10, true),
('Infection Control', 'infection-control', '🛡️', 'Infection control products', 11, true),
('PPE', 'ppe', '⚠️', 'Personal protective equipment', 12, true),
('Spirits, Detergents and Disinfectants', 'spirits-detergents-disinfectants', '💧', 'Cleaning and disinfectant products', 13, true),
('Syringes and Needles', 'syringes-and-needles', '💉', 'Syringes and needles', 14, true),
('Others', 'others', '⋯', 'Other products', 15, true)
ON CONFLICT (name) DO NOTHING;

-- Insert sample variants for demonstration
INSERT INTO web_variants (category_id, name, sku, slug, description, display_order, is_active) 
SELECT id, 'Premium Cotton Wool', 'CW-001', 'premium-cotton-wool', 'High quality cotton wool 500g', 1, true 
FROM web_categories WHERE slug = 'cotton-wool'
ON CONFLICT (sku) DO NOTHING;

INSERT INTO web_variants (category_id, name, sku, slug, description, display_order, is_active) 
SELECT id, 'Medical Grade Gloves', 'GL-001', 'medical-grade-gloves', 'Latex-free medical gloves - Box of 100', 1, true 
FROM web_categories WHERE slug = 'gloves'
ON CONFLICT (sku) DO NOTHING;
