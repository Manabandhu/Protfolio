package com.rajeshkoyi.portfolio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;
import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class PortfolioData {
    private Meta meta;
    private Contact contact;
    private List<Education> education;
    private List<Experience> experience;
    private Map<String, List<String>> skills;
    private Map<String, Object> metrics;
    private List<Publication> publications;
    private List<VersionInfo> versions;

    public Meta getMeta() { return meta; }
    public void setMeta(Meta meta) { this.meta = meta; }
    public Contact getContact() { return contact; }
    public void setContact(Contact contact) { this.contact = contact; }
    public List<Education> getEducation() { return education; }
    public void setEducation(List<Education> education) { this.education = education; }
    public List<Experience> getExperience() { return experience; }
    public void setExperience(List<Experience> experience) { this.experience = experience; }
    public Map<String, List<String>> getSkills() { return skills; }
    public void setSkills(Map<String, List<String>> skills) { this.skills = skills; }
    public Map<String, Object> getMetrics() { return metrics; }
    public void setMetrics(Map<String, Object> metrics) { this.metrics = metrics; }
    public List<Publication> getPublications() { return publications; }
    public void setPublications(List<Publication> publications) { this.publications = publications; }
    public List<VersionInfo> getVersions() { return versions; }
    public void setVersions(List<VersionInfo> versions) { this.versions = versions; }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class Meta {
    private String name;
    private String title;
    private String location;
    private List<String> targetRoles;
    private String availability;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public List<String> getTargetRoles() { return targetRoles; }
    public void setTargetRoles(List<String> targetRoles) { this.targetRoles = targetRoles; }
    public String getAvailability() { return availability; }
    public void setAvailability(String availability) { this.availability = availability; }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class Contact {
    private String email;
    private String linkedin;
    private String github;
    private String website;

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getLinkedin() { return linkedin; }
    public void setLinkedin(String linkedin) { this.linkedin = linkedin; }
    public String getGithub() { return github; }
    public void setGithub(String github) { this.github = github; }
    public String getWebsite() { return website; }
    public void setWebsite(String website) { this.website = website; }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class Education {
    private String institution;
    private String degree;
    private String period;
    private String type;
    private List<String> technologies;

    public String getInstitution() { return institution; }
    public void setInstitution(String institution) { this.institution = institution; }
    public String getDegree() { return degree; }
    public void setDegree(String degree) { this.degree = degree; }
    public String getPeriod() { return period; }
    public void setPeriod(String period) { this.period = period; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public List<String> getTechnologies() { return technologies; }
    public void setTechnologies(List<String> technologies) { this.technologies = technologies; }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class Experience {
    private String company;
    private String role;
    private String period;
    private String description;
    private List<String> technologies;

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }
    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
    public String getPeriod() { return period; }
    public void setPeriod(String period) { this.period = period; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public List<String> getTechnologies() { return technologies; }
    public void setTechnologies(List<String> technologies) { this.technologies = technologies; }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class Publication {
    private String title;
    private String context;
    private String year;
    private String description;

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getContext() { return context; }
    public void setContext(String context) { this.context = context; }
    public String getYear() { return year; }
    public void setYear(String year) { this.year = year; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class VersionInfo {
    private String id;
    private String name;
    private String period;
    private String technology;
    private String status;
    private String description;

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getPeriod() { return period; }
    public void setPeriod(String period) { this.period = period; }
    public String getTechnology() { return technology; }
    public void setTechnology(String technology) { this.technology = technology; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
