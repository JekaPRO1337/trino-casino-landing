from playwright.sync_api import sync_playwright
import time

def check_links():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        print("Connecting to http://127.0.0.1:5177 ...")
        
        # Retry logic in case server is still starting
        for _ in range(10):
            try:
                page.goto('http://127.0.0.1:6000', timeout=5000)
                break
            except Exception:
                time.sleep(2)
        
        page.wait_for_load_state('networkidle')
        links = page.locator('a').all()
        
        figma_link = 'https://www.figma.com/design/2EAYvzW7KAX413UqTPq5ox/SpellWin?node-id=0-1&p=f&t=YjDRagqBDGflPuds-0'
        
        found_count = 0
        print("Checking links...")
        for link in links:
            href = link.get_attribute('href')
            if href == figma_link:
                found_count += 1
                
        print(f"Playwright test: Found {found_count} links pointing to the Figma offer!")
        
        if found_count > 0:
            print("Link validation passed.")
        else:
            print("Warning: Link validation failed.")
            
        browser.close()

if __name__ == "__main__":
    check_links()
