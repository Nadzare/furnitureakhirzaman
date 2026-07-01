from PIL import Image

def crop():
    img = Image.open(r"d:\PROJECT LATAGON\furnitureakhirzaman\public\images\forlog.png")
    img_rgba = img.convert("RGBA")
    
    # Find bounding box of non-transparent pixels
    bbox = img_rgba.getbbox()
    if bbox:
        print(f"Bounding box of content: {bbox}")
        cropped = img_rgba.crop(bbox)
        # Save cropped image
        cropped.save(r"d:\PROJECT LATAGON\furnitureakhirzaman\public\images\forlog_cropped.png", "PNG")
        print("Successfully saved cropped image to public/images/forlog_cropped.png")
    else:
        print("No content found in image.")

if __name__ == "__main__":
    crop()
