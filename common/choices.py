from django.db import models


class UserRole(models.TextChoices):
    ADMIN = "ADMIN", "Admin"
    AGENT = "AGENT", "Agent"


class LeadSource(models.TextChoices):
    WHATSAPP = "WHATSAPP", "WhatsApp"
    INSTAGRAM = "INSTAGRAM", "Instagram"
    FACEBOOK = "FACEBOOK", "Facebook"
    WEBSITE = "WEBSITE", "Website"
    REFERRAL = "REFERRAL", "Referral"
    COLD_CALL = "COLD_CALL", "Cold Call"


class ServiceInterest(models.TextChoices):
    SEO = "SEO", "SEO"
    GOOGLE_ADS = "GOOGLE_ADS", "Google Ads"
    META_ADS = "META_ADS", "Meta Ads"
    SOCIAL_MEDIA = "SOCIAL_MEDIA", "Social Media"
    WEB_DEVELOPMENT = "WEB_DEVELOPMENT", "Web Development"


class LeadStatus(models.TextChoices):
    NEW = "NEW", "New"
    CONTACTED = "CONTACTED", "Contacted"
    INTERESTED = "INTERESTED", "Interested"
    NEGOTIATION = "NEGOTIATION", "Negotiation"
    WON = "WON", "Won"
    LOST = "LOST", "Lost"


class FollowupStatus(models.TextChoices):
    PENDING = "PENDING", "Pending"
    COMPLETED = "COMPLETED", "Completed"
    MISSED = "MISSED", "Missed"


class ActivityAction(models.TextChoices):
    LEAD_CREATED = "LEAD_CREATED", "Lead Created"
    LEAD_ASSIGNED = "LEAD_ASSIGNED", "Lead Assigned"
    STATUS_CHANGED = "STATUS_CHANGED", "Status Changed"
    FOLLOWUP_CREATED = "FOLLOWUP_CREATED", "Followup Created"
    NOTE_ADDED = "NOTE_ADDED", "Note Added"


