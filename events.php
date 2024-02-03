<section class="upcoming-meetings" id="meetings">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-heading">
                    <h2>Upcoming Events</h2>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="categories">
                    <h4>Events</h>
                    <ul>
                        <li><a href="event1.php">Student Meeting</a></li>
                        <li><a href="event2.php">Events for teachers and advisers</a></li>
                        <li><a href="event3.php">Public events and lectures</a></li><br>
                        <li><a href="event4.php">Audio tours</a></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-8">
                <div class="row">
                    <?php
        $events = [
            ["event1.jpg", "Aug 7", "Student Meeting", "Come and visit the university Explore unknown.", "event1.php"],
            ["event2.jpg", "AUG 10", "Events for teachers and advisers", "Discussion with the teachers for betterment.", "event2.php"],
            ["event3.jpg", "AUG 20", "Public events and lectures", "Attend the events and lectures to broaden your mind.", "event3.php"],
            ["event4.jpg", "AUG 30", "Audio tours", "Audio tour of prestigious Greenwich Campus.", "event4.php"]
        ];

        foreach ($events as $event) {
            ?>
                    <div class="col-lg-6">
                        <div class="meeting-item">
                            <div class="thumb">
                                <a href="<?php echo $event[4]; ?>"><img
                                        src="assets/images/<?php echo $event[0]; ?>"></a>
                            </div>
                            <div class="down-content">
                                <div class="date">
                                    <h6><?php echo $event[1]; ?></h6>
                                </div>
                                <a href="<?php echo $event[4]; ?>">
                                    <h4><?php echo $event[2]; ?></h4>
                                </a>
                                <p><?php echo $event[3]; ?></p>
                            </div>
                        </div>
                    </div>
                    <?php
        }
        ?>
                </div>
            </div>

        </div>
</section>