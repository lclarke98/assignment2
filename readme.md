Installation

Step 1 : Enter ". run.sh" in the gcloud shell
Step 2 : Enter "gcloud compute ssh master"
Step 3 : Once in the master instance cd into the scripts folder
Step 4 : Enter ". create-vm.sh n" with n being the number of client vms required


HOW IT WORKS

The run.sh script creates the master vm. The vm startup script will install node and git.
It will alos download the git repo which contains the script to create the client vms and
its starup script.

Once the master is setup, run the create vm script with the number of vms needed, This
will create the client vm. Once the client vms are creead this script then starts the 
command to start the dmw server. Once all jobs are complete it will delete all them
client vms.

The client vm startup script will download and install node and git, once installed the 
script will then run the start clkient comand. This wll staart the dmw lient server.
Once all jobs are complete the client vm will shutdown.