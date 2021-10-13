<sprint :name="'Sprint Two'">

<rubric-section :name="'Links'">
    <p class="text-center text-2xl"><span class="text-green-400">Feature</span> | <span class="text-red-600">Bug</span> | <span class="text-blue-400">Doc</span></p>
    <div class="rubric-content">
        <p><a class="link link-secondary text-green-400" href="https://github.com/cgerard321/champlain_petclinic/pull/91">Add SMTP</a></p>
        <p><a class="link link-secondary text-green-400" href="https://github.com/cgerard321/champlain_petclinic/pull/105">Add mail endpoint</a></p>
        <p><a class="link link-secondary text-green-400" href="https://github.com/cgerard321/champlain_petclinic/pull/105">Integrate mailer</a></p>
        <p><a class="link link-secondary text-blue-400" href="https://github.com/cgerard321/champlain_petclinic/pull/127">Add Swagger</a></p>
        <p><a class="link link-secondary text-blue-400" href="https://github.com/cgerard321/champlain_petclinic/pull/145">Add missing Swagger doc folder</a></p>
        <p><a class="link link-secondary text-red-600" href="https://github.com/cgerard321/champlain_petclinic/pull/146">Fix table names</a></p>
        <p><a class="link link-secondary text-green-400" href="https://github.com/cgerard321/champlain_petclinic/pull/152">Register user</a></p>
        <p><a class="link link-secondary text-green-400" href="https://github.com/cgerard321/champlain_petclinic/pull/159">Email verification on register</a></p>
        <p><a class="link link-secondary text-red-600" href="https://github.com/cgerard321/champlain_petclinic/pull/160">E-mail body not sending</a></p>
    </div>
</rubric-section>

<rubric-section :name="'User Story'">
    <div class="rubric-content">
        <p>I did a pretty poor job on the user stories</p>
        <p>I should have gone more in-depth about the stories, the acceptance criteria and should've had a more detailed description of the user stories</p>
        <p>I could've broken the tasks down more</p>
        <p>Some of the stories were comically easy while others were so hard that we had to chop them down to UI only stories</p>
    </div>
</rubric-section>

<rubric-section :name="'Version Control'">
    <div class="rubric-content">
        <p>My use of GIT was flawless in my honest opinion</p>
        <p>I followed the correct naming conventions for both branches and PRs, I made my stories on their own branches, and I reviewed other's codes as well as I could and requested changes wherever I felt it was necessary</p>
    </div>
</rubric-section>

<rubric-section :name="'Test Driven Development'">
    <div class="rubric-content">
        <p>I used TDD to the best of my capabilities</p>
        <p>I always wrote my tests before the implementation</p>
        <p>I refactored a little too soon in many areas (force of habit), but I stopped whenever I caught myself doing it</p>
        <p>All of my stories have in-depth tests associated with them</p>
        <p>
            I have 100% coverage on my stories. I even added JaCoCo to the project to make sure
            <img src="https://cdn.discordapp.com/attachments/777634949012389942/890224551756177438/image.png">
        </p>
        <p>My approach is clearly documented by my commits which you can check by going to my branches commit history. You'll see that the test are always committed prior to the implementation</p>
    </div>
</rubric-section>

<rubric-section :name="'Code'">
    <div class="rubric-content">
        <p>My code meets the criteria put forth in the story's acceptance criteria</p>
        <p>I did my best to have the same look & feel as the already existing elements for my UI</p>
        <p>My choice of data structures is, to me, judicious and I can easily explain as to why I chose a specific data structure > another</p>
        <p>My choice of data structures is, to me, judicious and I can easily argue as to why if you want</p>
        <p>I did not i18n my stories</p>
        <p>I am 100% certain that the database compiles with the data model as I have extensive persistence tests which rely on FlyWay to migrate in-order to pass</p>
        <p>I am certain that the data I handle is sync'd (because of my extensive tests)</p>
        <p>I ensured optimization of DB queries by using the JPABuddy plugin on IntelliJ</p>
    </div>
</rubric-section>

<rubric-section :name="'Security'">
    <div class="rubric-content">
        <p>I added Spring Security rules to limit access to my exposed endpoints</p>
        <p>I used DTOs where I felt it was necessary</p>
    </div>
</rubric-section>

<rubric-section :name="'Reviews'">
    <div class="rubric-content">
        <p>I reviewed code as best as I could and ensured my code was reviewed properly by checking in with the reviewers</p>
        <p>I should've been more thorough with my check though because my reviewers overlooked a pretty big mistake I had made in one of my PRs</p>
    </div>
</rubric-section>

<rubric-section :name="'Deployment'">
    <div class="rubric-content">
        <p>I am 100% sure that my story can be deployed through the CI/CD pipelines we have set-up</p>
        <p>I did not partake in the deployment of my microservice to AWS (was there even a deployment?)</p>
        <p>I changed the Dockerfile to a multi-stage, builder pattern, Dockerfile</p>
        <p>I requested that all the other teams to also change their Dockerfiles to make deployment simpler though I do not think all teams complied with my request</p>
        <p>I gave a short lecture about multi-stage Dockerfiles because no one knew what they were</p>
    </div>
</rubric-section>

<rubric-section :name="'Scrum Roles'">
    <div class="rubric-content">
        <p>I did not have a special scrum role, but I ended up being both product owner, scrum master, team lead, and manager to varying degrees</p>
        <p>I was constantly bombarded with "should I do this?", "tell me what to do", "you make the call", etc. Not a very fun experience...</p>
        <p>I constantly had to remind my SM and PO to fulfill their role, which is to be expected as this is the first sprint</p>
        <p>I pushed the team for stand-ups as much as possible and ensured the SM took minutes which I was very happy with</p>
    </div>
</rubric-section>

<rubric-section :name="'Progress'">
    <div class="rubric-content">
        <p>I performed pretty well this spring. I fulfilled what I committed to and then some. I also unblocked my teammates wherever I could by spending hours on calls explaining concepts, giving them resources to research more, and even giving full on lectures</p>
        <p>I should have divided the tasks better. I should have made more configuration stories to avoid overextending my stories' bounds</p>
    </div>
</rubric-section>

<rubric-section :name="'Extra'">
    <div class="rubric-content">
        <p>I had a more product focused mindset, going out of MY service's scope to better the product as a whole</p>
    </div>
</rubric-section>
</sprint>
