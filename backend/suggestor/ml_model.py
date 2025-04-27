import random

def analyze_photo(photo):
    # Simulate random environment detection
    environments = ['sunny', 'rainy', 'cold', 'party', 'casual']
    detected_environment = random.choice(environments)

    if detected_environment == 'sunny':
        suggestions = ["Light Cotton Shirt", "Shorts", "Sunglasses", "Sandals"]
    elif detected_environment == 'rainy':
        suggestions = ["Raincoat", "Waterproof Boots", "Umbrella", "Quick-dry Pants"]
    elif detected_environment == 'cold':
        suggestions = ["Woolen Jacket", "Thermal Pants", "Beanie", "Boots"]
    elif detected_environment == 'party':
        suggestions = ["Formal Shirt", "Blazer", "Trousers", "Leather Shoes"]
    else:  # casual
        suggestions = ["T-shirt", "Jeans", "Sneakers"]

    return suggestions
