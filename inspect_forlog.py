from PIL import Image

def process():
    img = Image.open(r"d:\PROJECT LATAGON\furnitureakhirzaman\public\images\forlog.png")
    print(f"Size: {img.size}")
    print(f"Mode: {img.mode}")
    
    # Check top-left pixel
    img_rgba = img.convert("RGBA")
    top_left = img_rgba.getpixel((0, 0))
    print(f"Top-left pixel: {top_left}")
    
    # If the background is not transparent (i.e. alpha > 10), we will remove it.
    # The text is white, so background is probably dark grey/black.
    if top_left[3] > 10:
        print("Background detected. Removing background...")
        bg_color = top_left
        datas = img_rgba.getdata()
        new_data = []
        threshold = 30
        for item in datas:
            r_diff = abs(item[0] - bg_color[0])
            g_diff = abs(item[1] - bg_color[1])
            b_diff = abs(item[2] - bg_color[2])
            if r_diff < threshold and g_diff < threshold and b_diff < threshold:
                new_data.append((0, 0, 0, 0))
            else:
                new_data.append(item)
        img_rgba.putdata(new_data)
        img_rgba.save(r"d:\PROJECT LATAGON\furnitureakhirzaman\public\images\forlog_transparent.png", "PNG")
        print("Saved transparent image to forlog_transparent.png")
    else:
        print("Image is already transparent or has a transparent background.")

if __name__ == "__main__":
    process()
