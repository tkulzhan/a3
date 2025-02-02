import json
import random
from datetime import datetime, timedelta

# Generate synthetic Google stock data for the past 90 days
num_days = 365
start_date = datetime.today() - timedelta(days=num_days)
stock_data = []

price = 2800  # Starting price

for i in range(num_days):
    date = (start_date + timedelta(days=i)).strftime('%Y-%m-%d')
    
    # Simulate stock price fluctuations
    open_price = round(price + random.uniform(-20, 20), 2)
    high_price = round(open_price + random.uniform(0, 15), 2)
    low_price = round(open_price - random.uniform(0, 15), 2)
    close_price = round(low_price + (high_price - low_price) * random.uniform(0.3, 0.7), 2)
    
    # Simulate trading volume
    volume = random.randint(100000, 1000000)
    
    # Append to dataset
    stock_data.append({
        "date": date,
        "open": open_price,
        "high": high_price,
        "low": low_price,
        "close": close_price,
        "volume": volume
    })
    
    # Update price for the next day
    price = close_price

# Save the dataset as JSON
with open("google_stock_data.json", "w") as f:
    json.dump(stock_data, f, indent=4)

print("Google stock data generated and saved to google_stock_data.json")
