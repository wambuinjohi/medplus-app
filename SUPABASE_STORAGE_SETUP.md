# Supabase Storage Setup for Product Images

## Overview
Product variant images are now uploaded directly to Supabase Storage instead of being stored as local paths.

## Setup Steps

### 1. Create Storage Bucket in Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to **Storage** → **Buckets**
3. Create a new bucket with these settings:
   - **Name**: `product-images`
   - **Public bucket**: Yes (so images can be accessed publicly)
   - **File size limit**: 5 MB

### 2. Set Storage Policies

For the `product-images` bucket, set these RLS policies:

#### Allow Authenticated Users to Upload
```sql
-- Allow authenticated users to upload images
CREATE POLICY "Allow authenticated users to upload images"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'product-images'
  AND auth.role() = 'authenticated'
);
```

#### Allow Public Read Access
```sql
-- Allow public read access to all images
CREATE POLICY "Allow public read access"
ON storage.objects
FOR SELECT
USING (bucket_id = 'product-images');
```

#### Allow Users to Delete Their Own Files (Optional)
```sql
-- Allow authenticated users to delete their own images
CREATE POLICY "Allow users to delete their own images"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'product-images'
  AND auth.role() = 'authenticated'
);
```

### 3. Verify Setup

To test the setup:
1. Navigate to Web Manager in your application
2. Go to the Variants tab
3. Click "Edit" on a variant
4. Try uploading an image
5. You should see the image preview appear and the file upload to Supabase Storage

## Image URL Format

After upload, images are stored with this structure:
```
product-images/variants/{slug}-{timestamp}.{extension}
```

Example:
```
https://[project-id].supabase.co/storage/v1/object/public/product-images/variants/medical-grade-gloves-1704067200000.jpg
```

## Troubleshooting

### "Failed to upload image" error
- Check that the `product-images` bucket exists
- Verify RLS policies are correctly set
- Ensure the bucket is set as public

### Images not visible
- Check browser console for CORS errors
- Verify the bucket is public
- Confirm the file was actually uploaded to Supabase Storage

### Upload hangs or times out
- Check network tab in browser DevTools
- Verify Supabase project is accessible
- Ensure file size is under 5MB limit

## Code Integration

The upload functionality is implemented in:
- `src/utils/imageUploadService.ts` - Upload and delete utilities
- `src/components/web-manager/ImageUploadField.tsx` - UI component

Images are stored at: `variants/{variant-slug}-{timestamp}.{ext}`
