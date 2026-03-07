from reportlab.platypus import (
    BaseDocTemplate, 
    PageTemplate, 
    Frame, 
    Paragraph, 
    Spacer, 
    PageBreak,
    NextPageTemplate
)
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_RIGHT, TA_LEFT, TA_JUSTIFY
from reportlab.lib.units import mm

# --------------------------------------------------
# Configuration
# --------------------------------------------------
OUTPUT = "Al_Ahmad_Continental_Letterhead.pdf"
LOGO = "logo_bg.png"
WORDMARK = "wordmark_bg.png"

# Brand Colors
GREEN = colors.HexColor("#2f5d3a")
GOLD = colors.HexColor("#c9a24d")
WHITE = colors.white
GREY = colors.HexColor("#555555")

# Links
MAPS_URL = "https://maps.app.goo.gl/vyeGBbU15fQinwE19"

# Company Data
ADDRESS_LINE = (
    f'''#579, 32nd 'D' Cross, 10th Main Road, 4th Block, Jayanagar, Bangalore - 
    560011, Karnataka, <link href="{MAPS_URL}" color="{GOLD.hexval()}"><b>India</b></link>.'''
)

CONTACT_LINE = "+91 63633 72655  |  sales@aacexports.in  |  www.aacexports.in"
TAGLINE = "Global Exports. Built on Standards."

# --------------------------------------------------
# Drawing Functions (Canvas Operations)
# --------------------------------------------------

def draw_watermark(c, w, h):
    """Draws the subtle center watermark."""
    wm_size = 120 * mm
    c.saveState()
    c.setFillAlpha(0.06)
    c.drawImage(
        LOGO, 
        (w - wm_size) / 2, 
        (h - wm_size) / 2, 
        width=wm_size, 
        height=wm_size, 
        mask='auto', 
        preserveAspectRatio=True,
        anchor='c'
    )
    c.restoreState()

def draw_footer_bg(c, w, h):
    """Draws the green footer background."""
    footer_h = 22 * mm
    c.saveState()
    c.setFillColor(GREEN)
    c.rect(0, 0, w, footer_h, stroke=0, fill=1)
    
    # Optional: A thin gold line above the green footer
    c.setStrokeColor(GOLD)
    c.setLineWidth(1)
    c.line(0, footer_h, w, footer_h)
    
    c.restoreState()

def draw_footer_content(c, w):
    """Draws the footer text content using Paragraphs to support links."""
    c.saveState()
    
    styles = getSampleStyleSheet()
    footer_style = ParagraphStyle(
        'FooterStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        textColor=WHITE,
        alignment=TA_CENTER,
        leading=11
    )
    
    # Address Paragraph (with Link)
    p_address = Paragraph(ADDRESS_LINE, footer_style)
    w_p, h_p = p_address.wrap(w - 20*mm, 20*mm)
    p_address.drawOn(c, 10*mm, 13*mm)
    
    # Contact Paragraph
    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=footer_style,
        fontName='Helvetica-Bold',
        textColor=GOLD
    )
    p_contact = Paragraph(CONTACT_LINE, contact_style)
    w_c, h_c = p_contact.wrap(w - 20*mm, 20*mm)
    p_contact.drawOn(c, 10*mm, 8*mm)
    
    c.restoreState()

def on_first_page(canvas, doc):
    canvas.saveState()
    w, h = doc.pagesize
    
    # 1. Watermark
    draw_watermark(canvas, w, h)
    
    # 2. Header Background / Accents
    # Let's add a top accent bar (Gold)
    c = canvas
    top_bar_h = 2 * mm
    c.setFillColor(GOLD)
    c.rect(0, h - top_bar_h, w, top_bar_h, stroke=0, fill=1)
    
    # 3. Header Images
    # Logo Left
    logo_size = 35 * mm
    margin_x = 20 * mm
    header_top = h - 10 * mm
    
    c.drawImage(
        LOGO,
        margin_x,
        header_top - logo_size,
        width=logo_size,
        height=logo_size,
        mask='auto',
        preserveAspectRatio=True
    )
    
    # Wordmark Right
    wm_w = 90 * mm
    wm_h = 25 * mm
    c.drawImage(
        WORDMARK,
        w - margin_x - wm_w,
        header_top - wm_h - 4*mm, # Align visually with center of logo
        width=wm_w,
        height=wm_h,
        mask='auto',
        preserveAspectRatio=True,
        anchor='e' # East anchor
    )
    
    # Tagline under Wordmark
    c.setFont("Helvetica", 11)
    c.setFillColor(GOLD)
    # Center of wordmark = (Right Edge) - (Width / 2)
    wm_center_x = (w - margin_x) - (wm_w / 2)
    c.drawCentredString(wm_center_x, header_top - wm_h - 7*mm, TAGLINE)
    
    # Separator Line
    sep_y = header_top - logo_size - 4 * mm
    c.setStrokeColor(GREEN)
    c.setLineWidth(0.5)
    c.line(margin_x, sep_y, w - margin_x, sep_y)
    
    # 4. Footer
    draw_footer_bg(canvas, w, h)
    draw_footer_content(canvas, w)
    
    canvas.restoreState()

def on_continuation_page(canvas, doc):
    canvas.saveState()
    w, h = doc.pagesize
    
    # 1. Watermark
    draw_watermark(canvas, w, h)
    
    # 2. Simplified Header
    # Just the company name text or small logo
    margin_x = 20 * mm
    header_y = h - 20 * mm
    
    # Small Logo Left
    small_logo_s = 15 * mm
    canvas.drawImage(LOGO, margin_x, header_y - small_logo_s, width=small_logo_s, height=small_logo_s, mask='auto', preserveAspectRatio=True)
    
    # Text "Al Ahmad Continental"
    canvas.setFont("Helvetica-Bold", 12)
    canvas.setFillColor(GREEN)
    canvas.drawString(margin_x + small_logo_s + 5*mm, header_y - 10*mm, "Al Ahmad Continental")
    
    # Page Number (Optional)
    # page_num = doc.page # Note: doc.page is not reliable in flowables context sometimes, but works in callbacks usually.
    # canvas.setFont("Helvetica", 9)
    # canvas.setFillColor(GREY)
    # canvas.drawRightString(w - margin_x, header_y - 10*mm, f"Page {page_num}")
    
    # Divider
    sep_y = header_y - small_logo_s - 4 * mm
    canvas.setStrokeColor(GOLD)
    canvas.setLineWidth(0.5)
    canvas.line(margin_x, sep_y, w - margin_x, sep_y)
    
    # 3. Footer
    draw_footer_bg(canvas, w, h)
    draw_footer_content(canvas, w)
    
    canvas.restoreState()

# --------------------------------------------------
# Main Build
# --------------------------------------------------
def build_pdf():
    # Define Frames
    margin_left = 25 * mm
    margin_right = 25 * mm
    
    # First Page Frame
    frame_first = Frame(
        margin_left, 
        30 * mm, # Bottom padding (footer)
        A4[0] - margin_left - margin_right,
        A4[1] - 50 * mm - 30 * mm, # Height
        id='first_frame',
        showBoundary=0
    )
    
    # Continuation Frame
    frame_continuation = Frame(
        margin_left, 
        30 * mm, 
        A4[0] - margin_left - margin_right,
        A4[1] - 35 * mm - 30 * mm, 
        id='continuation_frame',
        showBoundary=0
    )
    
    doc = BaseDocTemplate(
        OUTPUT,
        pagesize=A4,
        pageTemplates=[
            PageTemplate(id='FirstPage', frames=[frame_first], onPage=on_first_page),
            PageTemplate(id='Continuation', frames=[frame_continuation], onPage=on_continuation_page),
        ]
    )

    story = []
    
    # --- Page 1 (Main Letterhead) ---
    # Empty content to show just the layout
    story.append(Spacer(1, 10)) 
    
    # --- Switch to Continuation Sheet ---
    story.append(NextPageTemplate('Continuation'))
    story.append(PageBreak())
    
    # --- Page 2 (Continuation 1) ---
    story.append(Spacer(1, 10))
    story.append(PageBreak())

    # --- Page 3 (Continuation 2) ---
    story.append(Spacer(1, 10))
    story.append(PageBreak())

    # --- Page 4 (Continuation 3) ---
    story.append(Spacer(1, 10))

    doc.build(story)
    print(f"✅ Professional letterhead (1 Main + 3 Continuation) generated: {OUTPUT}")

if __name__ == "__main__":
    build_pdf()