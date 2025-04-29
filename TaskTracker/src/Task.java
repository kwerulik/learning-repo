import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Task {
    private int id;
    private String description;
    private String status;
    private String createdAt;
    private String updatedAt;

    public Task(int id, String description) {
        this.id = id;
        this.description = description;
        this.status = "todo";
        String now = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
        this.createdAt = now;
        this.updatedAt = now;
    }

    public int getId() { return id; };
    public String getDescription() { return description; };
    public String getStatus() { return status; };
    public String getCreatedAt() { return createdAt; };
    public String getUpdatedAt() { return updatedAt; };

    public void setDescription(String description) {
        this.description = description;
    }

    public void setStatus(String status){
        this.status = status;
        updateTimestamp();
    }

    public void updateTimestamp() {
        this.updatedAt = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
    }

}